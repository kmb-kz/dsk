import { Component, OnInit } from '@angular/core';
import { RpmConstructivesService, ConstructiveRemarkAdd, UpdateConstructive, DeleteConstructive } from '../../../../services/rpm/rpm-constructives.service';
import { Nsi } from '../../../../services/models/models';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { RpmRemarkService } from '../../../../services/rpm/rpm-remark.service';
import { ResponseModel } from '../../../../services/models/common/responseModel';

declare var jQuery: any;

@Component({
  selector: 'app-rpm-constructives',
  templateUrl: './rpm-constructives.component.html',
  styleUrls: ['./rpm-constructives.component.css']
})

export class RpmConstructivesComponent implements OnInit {
  responsemodel: ResponseModel<boolean>;
  constructives: Nsi;
  isdeleted: boolean;
  searchConstr: string;
  typeRemark1: Nsi[];
  typeRemark2: Nsi[];
  rpmConstructivRemark = new RpmConstructivesRemark();
  listRemrk = new ListRemark();
  constructiveRootId: string;
  firstConstructiveId: string;
  selectedAddConstructive: boolean = false;
  selectedAddFirstRemark: boolean = false;
  selectedAddSecondRemark: boolean = false;
  model = new ConstructiveRemarkAdd();
  constructiveEditName: string;
  editModel = new UpdateConstructive();
  deleteModel = new DeleteConstructive();
  delConstructive = new RpmDeleteConstructive();

  constructor(private service: RpmConstructivesService, private serviceRemark: RpmRemarkService,
    private toaster: ToasterComponent) { }

  ngOnInit() {
    this.getConstructives();
    this.constructiveRootId = null;
  }

  toggleFormConstructive(num: number): void {
    if (num === 1) {
      this.selectedAddConstructive = !this.selectedAddConstructive;
    }
    if (num === 2) {
      this.selectedAddFirstRemark = !this.selectedAddFirstRemark;
    }
    if (num === 3) {
      this.selectedAddSecondRemark = !this.selectedAddSecondRemark;
    }
  }

  addConstructive(name: string) {
    this.service.addConstructive(name, 0).subscribe(
      data => {
        if (data.success) {
          this.getConstructives();
          this.toggleFormConstructive(1);
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  addConstructiveRemark(name: string, num: number) {
    if (num === 1) {
      this.model.name = name;
      this.model.constructiveId = this.constructiveRootId;
      this.model.parentId = null;
    } else {
      this.model.name = name;
      this.model.constructiveId = this.constructiveRootId;
      this.model.parentId = this.firstConstructiveId;
    }
    this.service.addConstructiveRemark(this.model).subscribe(
      data => {
        if (data.success) {
          if (num === 1) {
            this.loadTypeRemark(this.constructiveRootId, num);
            this.toggleFormConstructive(2);
          } else {
            this.loadTypeRemark(this.constructiveRootId, num, this.firstConstructiveId);
            this.toggleFormConstructive(3);
          }
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getConstructives() {
    this.service.getConstructives().subscribe(
      data => {
        this.constructives = data.result;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  loadTypeRemark(constructiveId: string, numberSel: number, parentId?: string) {

    if (numberSel === 1) {
      this.typeRemark1 = [];
      this.typeRemark2 = null;
    }
    this.serviceRemark.getRemarkTypes(parentId, constructiveId).subscribe(
      data => {
        if (data.success) {
          if (numberSel === 1) {
            this.typeRemark1 = data.result;
            this.constructiveRootId = constructiveId;
            this.firstConstructiveId = null;
          }
          if (numberSel === 2) {
            this.typeRemark2 = data.result;
            this.firstConstructiveId = parentId;
          }
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  infoConstructive(id: string, type: number, name: string) {
    this.editModel = new UpdateConstructive();
    this.editModel.Name = name;
    this.editModel.Id = id;
    this.editModel.TypeNum = type;
    this.deleteModel = new DeleteConstructive();
    this.deleteModel.Name = name;
    this.deleteModel.Id = id;
    this.deleteModel.TypeNum = type;
  }

  editConstructive() {
    this.service.updateConstructive(this.editModel).subscribe(
      data => {
        if (data.success) {
          jQuery('#editModal').modal('hide');
          if (this.editModel.TypeNum === 1) {
            this.getConstructives();
          } else {
            this.loadTypeRemark(this.constructiveRootId, this.editModel.TypeNum - 1, this.firstConstructiveId);
          }


          this.editModel = new UpdateConstructive();
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  deleteConstructive() {
    this.delConstructive = new RpmDeleteConstructive();
    this.delConstructive.id = this.deleteModel.Id;
    this.delConstructive.typeNum = this.deleteModel.TypeNum;
    this.service.DeleteConstructive(this.delConstructive).subscribe(
      data => {

        this.responsemodel = data.result;
        if (data.success) {
          jQuery('#deleteModal').modal('hide');
          if (this.editModel.TypeNum === 1) {
            this.getConstructives();
          } else {
            this.loadTypeRemark(this.constructiveRootId, this.delConstructive.typeNum - 1, this.firstConstructiveId);
          }
        } else {
          this.toaster.popToast('info', 'Внимание!', data.message);
          jQuery('#deleteModal').modal('hide');
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
}

export class RpmDeleteConstructive {
  id: string;
  typeNum: number;
}


export class RpmConstructivesRemark {
  id: string;
  name: string;
}

export class ListRemark {
  firstRemark: string;
  secondResmark: string;
}