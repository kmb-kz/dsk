import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RpmObjectService } from '../../../../../../services/rpm/rpm-object.service';
import { ToasterComponent } from '../../../../../../components/toaster/toaster.component';

@Component({
  selector: 'app-area-detour',
  templateUrl: './area-detour.component.html',
  styleUrls: ['./area-detour.component.css']
})
export class AreaDetourComponent implements OnInit {

  @Input() areaId: string;
  detourArea = [];
  constructor(private route: ActivatedRoute, private services: RpmObjectService, private toaster: ToasterComponent) {
  }

  ngOnInit() {
    this.getDetourArea();
  }

  getDetourArea() {
    this.services.getDetourArea(this.areaId).subscribe(
      i => {
        if (i.success) {
          this.detourArea = i.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', i.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }

  addDetour() {
    this.services.addDetourArea(this.areaId).subscribe(
      i => {
        if (i.success) {
          this.getDetourArea();
        } else {
          this.toaster.popToast('error', 'Внимание!', i.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }

}
