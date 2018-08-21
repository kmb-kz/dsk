import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import { CnsPoint, CnsAreaService, CnsScheme } from '../../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../cns-area.component';
import { NsiService } from '../../../../../../services/nsi.service';
import { environment } from '../../../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsPartSchemeComponentModel } from '../cns-part-scheme.component';
import { File64 } from '../../../../../../components/file-one/file-one.component';
import { AuthService } from '../../../../../../services/common/auth.service';
import { Nsi } from '../../../../../../services/models/models';

@Component({
  selector: 'app-cns-scheme-panel',
  templateUrl: './cns-scheme-panel.component.html',
  styleUrls: ['./cns-scheme-panel.component.css']
})
export class CnsSchemePanelComponent implements OnInit {
  @ViewChild('myCanvas') canvas: ElementRef;
  newPoint: any;

  selectedPoint: CnsPoint;
  radius: number;
  height: number;
  width: number;
  constructiveId: string;
  contracts: Promise<Nsi>;
  showScheme: boolean = false;

  constructor(public nsi: NsiService, private service: CnsAreaService,
    private model: CnsAreaComponentModel, private route: ActivatedRoute, private router: Router,
    private schemeModel: CnsPartSchemeComponentModel, private renderer: Renderer, public auth: AuthService) {
    this.radius = 13;
  }
  ngOnInit() {
    this.radius = parseInt(localStorage.getItem('cns-scheme-radius-' + this.schemeModel.Id)) || 13;
    this.constructiveId = localStorage.getItem('cns-scheme-constructiveId-' + this.schemeModel.Id) || '';
    this.schemeModel.Scheme.then(i => {
      this.height = i.height;
      this.width = i.width;
      this.renderer.setElementStyle(this.canvas.nativeElement, 'background-image', 'url(' + environment.apiUrl + i.schemeUrl + ')');
      this.renderer.setElementAttribute(this.canvas.nativeElement, 'height', i.height.toString());
      this.renderer.setElementAttribute(this.canvas.nativeElement, 'width', i.width.toString());
      this.refreshConvasPoints();
    });
    if (!this.schemeModel.Points) {
      this.service.points(this.schemeModel.Id).subscribe(i => {
        this.schemeModel.Points = i;
        this.refreshConvasPoints();
      });
    }
  }
  lastPoint: CnsPoint;
  @HostListener('mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    if (this.height > 0 && !this.action && this.canvas && this.canvas.nativeElement && this.schemeModel.Points) {
      var context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
      var rect = this.canvas.nativeElement.getBoundingClientRect();
      var elementHeight = this.canvas.nativeElement.offsetHeight;
      var elementWidth = this.canvas.nativeElement.offsetWidth;
      var elementX = event.clientX - rect.left;
      var elementY = event.clientY - rect.top;

      var x = parseInt((this.width * elementX / elementWidth).toFixed());
      var y = parseInt((this.height * elementY / elementHeight).toFixed());

      if (x > 0 && y > 0) {
        for (let i = this.schemeModel.Points.length - 1; i >= 0; i--) {
          if (this.include(this.schemeModel.Points[i], x, y)) {
            var point = this.schemeModel.Points[i];
            if (point != this.lastPoint) {
              this.refreshConvasPoints();
              this.lastPoint = point;
              //context.strokeStyle = 'black';
              context.fillStyle = '#00acac';
              context.font = '500 25px Arial'
              context.fillText(point.fixed + '/', point.pointX + 20, point.pointY + 5);
              //context.strokeText(point.fixed + '/', point.pointX + 20, point.pointY +5);
              context.fillStyle = '#cc3131';
              context.font = '500 25px Arial'
              let x = 35 + (point.fixed.toString().length * 8);

              context.fillText(point.notMatches.toString(), point.pointX + x, point.pointY + 5);
              //context.strokeText(point.notMatches.toString(), point.pointX + 55, point.pointY + 5);
            }
            return;
          }
        }
        this.lastPoint = null;
        this.refreshConvasPoints();
      }
    }
  }
  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    if (this.height > 0 && this.canvas && this.canvas.nativeElement) {
      var context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
      var rect = this.canvas.nativeElement.getBoundingClientRect();
      var elementHeight = this.canvas.nativeElement.offsetHeight;
      var elementWidth = this.canvas.nativeElement.offsetWidth;
      var elementX = event.clientX - rect.left;
      var elementY = event.clientY - rect.top;

      var x = parseInt((this.width * elementX / elementWidth).toFixed());
      var y = parseInt((this.height * elementY / elementHeight).toFixed());

      if (x > 0 && y > 0) {
        if (this.action == 'add') {
          this.draw(x, y, 'white', null);
          let point = {
            pointX: x,
            pointY: y,
            schemeId: this.schemeModel.Id,
            contractId: this.newPoint.contractId,
            constructiveId: this.newPoint.constructiveId
          };
          this.service.pointPost(point).subscribe(id => {
            let point = new CnsPoint();
            point.id = id;
            point.pointX = x;
            point.pointY = y;
            point.fixed = 0;
            point.checkListCount = 0;
            point.answers = 0;
            point.notMatches = 0;
            if (!this.schemeModel.Points)
              this.schemeModel.Points = [];
            this.schemeModel.Points.push(point);
            this.refreshConvasPoints();
          });
        } else {
          for (let i = this.schemeModel.Points.length - 1; i >= 0; i--) {
            let point = this.schemeModel.Points[i];
            if ((!this.constructiveId || this.constructiveId == '' || this.constructiveId == point.constructive.id)
              && this.include(point, x, y)) {
              if (this.action == 'remove') {
                this.draw(point.pointX, point.pointY, 'white', point.number);
                this.service.pointDelete(point.id).subscribe(r => {
                  point.deleted = true;
                  this.refreshConvasPoints();
                });
              } else if (this.action == 'restore') {
                this.draw(point.pointX, point.pointY, 'grey', point.number);
                point.deleted = false;
                this.service.pointRestore(point.id).subscribe(r => {
                });
              } else {
                if (point.constructive)
                  this.schemeModel.SelectedPoint = point;
                this.router.navigate([this.schemeModel.Points[i].id], { relativeTo: this.route });
              }
              return;
            }
          }
        }
      }
    }
  }
  action = '';
  addClick() {
    this.action = "init";
    this.newPoint = new CnsPoint();
  }
  end() {
    this.action = '';
    this.newPoint = null;
    this.refreshConvasPoints();
  }
  restoreClick() {
    this.action = 'restore';
    this.refreshConvasPoints();
  }
  radiusChange() {
    localStorage.setItem('cns-scheme-radius-' + this.schemeModel.Id, this.radius.toString());
    this.refreshConvasPoints();
  }
  constructiveIdChange() {
    localStorage.setItem('cns-scheme-constructiveId-' + this.schemeModel.Id, this.constructiveId.toString());
    this.refreshConvasPoints();
  }
  refreshConvasPoints() {
    if (this.height > 0) {
      var context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
      context.clearRect(0, 0, this.width, this.height);
      if (this.schemeModel.Points) {
        this.schemeModel.Points.forEach(point => {
          if (this.action != 'restore' && !point.deleted || this.action == 'restore' && point.deleted)
            if (!this.constructiveId || this.constructiveId == '' || this.constructiveId == point.constructive.id) {
              if (point.deleted)
                this.draw(point.pointX, point.pointY, 'white', point.number);
              else if (point.answers == 0 || !point.answers)
                this.draw(point.pointX, point.pointY, 'grey', point.number);
              else if (point.notMatches > point.fixed)
                this.draw(point.pointX, point.pointY, '#cc3131', point.number);
              else if (point.answers == point.checkListCount)
                this.draw(point.pointX, point.pointY, '#00acac', point.number);
              else
                this.draw(point.pointX, point.pointY, '#f59c1a', point.number);
            }
        });
      }
    }
  }

  private include(point: CnsPoint, x: number, y: number): boolean {
    return (this.action != 'restore' && !point.deleted || this.action == 'restore' && point.deleted) && Math.sqrt((x - point.pointX) * (x - point.pointX) + (y - point.pointY) * (y - point.pointY)) < this.radius;
  }
  private draw(x: number, y: number, color: string, num: number) {
    var context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    context.beginPath();
    context.arc(x, y, this.radius, 0, 2 * Math.PI);
    context.shadowBlur = 10;
    context.shadowColor = 'black';
    context.fillStyle = color;
    context.fill();
    context.shadowBlur = 0;
    context.lineWidth = 2;
    context.strokeStyle = 'white';
    context.stroke();
    if (num != null) {
      context.fillStyle = 'black';
      context.font = '500 15px Arial'
      context.fillText(num.toString(), x - 15, y - 20);
    }

  }

  private answersClick() {
    this.showScheme = !this.showScheme;
  }

}
