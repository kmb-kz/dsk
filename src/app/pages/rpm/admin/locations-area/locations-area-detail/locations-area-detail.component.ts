import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RpmObjectService } from '../../../../../services/rpm/rpm-object.service';
import { RpmAreaEdit } from '../../../../../services/rpm/rpm-area-parts.service';
import { ToasterComponent } from '../../../../../components/toaster/toaster.component';
import { LLC } from '../../../../../services/models/rpm/rpm-object.model';
import { Observable } from 'rxjs/Observable';
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app-locations-area-detail',
  templateUrl: 'locations-area-detail.component.html',
  styleUrls: ['locations-area-detail.component.css']
})
export class LocationsAreaDetailComponent implements OnInit {

  areaId: string;
  infoArea: any;
  modalEditArea = new RpmAreaEdit();
  llc: string;
  llcList: Observable<LLC[]>;
  constructor(private route: ActivatedRoute, private services: RpmObjectService, private toaster: ToasterComponent) {
    this.areaId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getAreaFullInfo(this.areaId);
    this.getLLC();
  }

  getAreaFullInfo(id: string) {
    this.modalEditArea = new RpmAreaEdit();
    this.services.getFullInfo(id).subscribe(
      data => {
        if (data.success) {
          this.infoArea = data.result;
          this.modalEditArea.id = data.result.id;
          this.modalEditArea.name = data.result.name;
          this.modalEditArea.descr = data.result.descr;
          this.modalEditArea.llc = data.result.llc;
        }
      }
    );
  }

  editArea() {

    this.services.updateObject(this.modalEditArea).subscribe(
      data => {
        if (data.success) {
          this.getAreaFullInfo(this.areaId);
          jQuery('#modal-editArea').modal('hide');

        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );

  }

  getLLC() {
    this.llcList = this.services.getLLC();
  }
}