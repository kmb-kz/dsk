import { Component, OnInit, Input } from '@angular/core';
import { RpmRemarkService, ChildLocation } from '../../../../../../services/rpm/rpm-remark.service';
import { ToasterComponent } from '../../../../../../components/toaster/toaster.component';
import { RpmAreaPartAdd, RpmAreaPartsService, RpmAreaPartEdit, RpmAreaPartOneAdd } from '../../../../../../services/rpm/rpm-area-parts.service';
declare var jQuery: any;


@Component({
  moduleId: module.id,
  selector: 'app-child-locations',
  templateUrl: 'child-locations.component.html',
  styleUrls: ['child-locations.component.css']
})
export class ChildLocationsComponent implements OnInit {

  @Input() areaId: string;
  childLocationModel: any[];
  modalAddParts: RpmAreaPartAdd = new RpmAreaPartAdd();
  modalEditPart: RpmAreaPartEdit = new RpmAreaPartEdit();
  modalAddPart: RpmAreaPartOneAdd = new RpmAreaPartOneAdd();
  visableButtonAddLocation: boolean = false;
  issetBlock = null;
  constructor(private services: RpmRemarkService, private areaServices: RpmAreaPartsService,
    private toaster: ToasterComponent) {
  }

  ngOnInit() {
    this.loadAreaParts(this.areaId, '');
  }
  addAreaPartOne() {
    this.modalAddPart.typeId = 1;
    this.modalAddPart.areaId = this.areaId;
    this.areaServices.addAreaPart(this.modalAddPart).subscribe(x => {
      this.loadAreaParts(this.areaId, '');
      jQuery('#modalAddAreaPart').modal('hide');
    });
  }
  loadAreaParts(id: string, parentId?: string) {
    this.childLocationModel = [];
    this.services.getAreaParts(parentId, id).subscribe(
      data => {
        if (data.success) {
          if (data.result.length === 0) {
            this.visableButtonAddLocation = true;
            this.childLocationModel = [];
          } else {
            this.childLocationModel = data.result;
            this.visableButtonAddLocation = false;
          }
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      }
    );
  }

  editPartsInfo(name: string, id: string) {
    this.modalEditPart.id = id;
    this.modalEditPart.nameParts = name;
    this.modalEditPart.areaId = this.areaId;
    this.modalEditPart.parentId = null;
  }

  addAreaPart() {
    this.modalAddParts.areaId = this.areaId;
    this.issetBlock = 0;
    if (this.issetBlock === 1) {
      if ((this.modalAddParts.cntBlocks > 0) && (this.modalAddParts.cntEntrance > 0)
        && (this.modalAddParts.cntFloor > 0)) {
        this.areaServices.addAreaParts(this.modalAddParts).subscribe(
          data => {
            if (data.success) {
              this.loadAreaParts(this.areaId, '');
              jQuery('#modal-dialog').modal('hide');
              this.modalAddParts = new RpmAreaPartAdd();
            } else {
              this.toaster.popToast('error', 'Внимание!', data.message);
            }
          },
          error => {
            this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
          }
        );
      } else {
        this.toaster.popToast('error', 'Внимание!', 'Кол-во некорректно указаны');
      }
    } else {
      this.modalAddParts.cntBlocks = 0;
      if ((this.modalAddParts.cntEntrance > 0) && (this.modalAddParts.cntFloor > 0)) {
        this.areaServices.addAreaParts(this.modalAddParts).subscribe(
          data => {
            if (data.success) {
              this.loadAreaParts(this.areaId, '');
              jQuery('#modal-dialog').modal('hide');
              this.modalAddParts = new RpmAreaPartAdd();
            } else {
              this.toaster.popToast('error', 'Внимание!', data.message);
            }
          },
          error => {
            this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
          }
        );
      } else {
        this.toaster.popToast('error', 'Внимание!', 'Кол-во некорректно указаны');
      }
    }
  }

  editAreaPart() {
    this.areaServices.editAreaParts(this.modalEditPart).subscribe(
      data => {
        if (data.success) {
          this.loadAreaParts(this.areaId, '');
          jQuery('#modal-dialog-edit').modal('hide');
          this.modalEditPart.nameParts = '';
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
}
