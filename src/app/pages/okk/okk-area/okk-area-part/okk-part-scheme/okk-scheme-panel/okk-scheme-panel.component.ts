import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { CnsPoint, CnsAreaService } from '../../../../../../services/cns/cns-area.service';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../../services/common/auth.service';
import { CnsPartSchemeComponentModel } from '../../../../../cns/cns-area/cns-area-part/cns-part-scheme/cns-part-scheme.component';
import { CnsAreaComponentModel } from '../../../../../cns/cns-area/cns-area.component';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-okk-scheme-panel',
  templateUrl: './okk-scheme-panel.component.html',
  styleUrls: ['./okk-scheme-panel.component.css']
})
export class OkkSchemePanelComponent implements OnInit {

  @ViewChild('myCanvas') canvas: ElementRef;

  height: number;
  width: number;
  constructiveId: string;
  pathValue: string;

  constructor(private service: CnsAreaService,
    private model: CnsAreaComponentModel, private route: ActivatedRoute, private router: Router,
    private schemeModel: CnsPartSchemeComponentModel, private renderer: Renderer, public auth: AuthService) {

  }

  ngOnInit() {
    this.pathValue = localStorage.getItem('pathValue');
    this.schemeModel.Scheme.then(i => {
      this.height = i.height;
      this.width = i.width;
      this.renderer.setElementStyle(this.canvas.nativeElement, 'background-image', 'url(' + environment.apiUrl + i.schemeUrl + ')');
      this.renderer.setElementAttribute(this.canvas.nativeElement, 'height', i.height.toString());
      this.renderer.setElementAttribute(this.canvas.nativeElement, 'width', i.width.toString());
    });
    if (!this.schemeModel.Points) {
      this.service.points(this.schemeModel.Id).subscribe(i => {
        this.schemeModel.Points = i;
      });
    }
  }
}
