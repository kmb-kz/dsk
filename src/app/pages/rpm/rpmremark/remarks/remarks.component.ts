import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Remarks, RpmRemarkService } from '../../../../services/rpm/rpm-remark.service';
import { ActivatedRoute } from '@angular/router';
import { RpmConstructivesService } from '../../../../services/rpm/rpm-constructives.service';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { NsiService } from '../../../../services/nsi.service';
import { Nsi } from '../../../../services/models/models';
import { File64 } from '../../../common/file/file.component';
import { AuthService } from '../../../../services/common/auth.service';

declare var jQuery: any;

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {

  remarkList: Remarks = new Remarks();
  @Input() areaId: string;
  @Input() areaPartId: string;
  @Input() issetChildren: boolean;
  @Input() areaName: string;
  @Input() infoSelectInfo: any;

  role: string;
  constructives: Nsi[];
  typeRemark1: Nsi[];
  typeRemark2: Nsi[];
  constructiveModel: string;
  criticalites: Nsi[];
  statuses: Nsi[];
  modalRpm = new AddRepamrkTemplate();
  isEditVisable: boolean = false;
  newVariantRemark: string;
  //filter
  selectedStatusId: string = null;
  selectedCriticalityId: string = null;
  selectedConstructiveId: string = null;

  answerListId: string;
  checkListId: string;
  statusClick: boolean = false;
  areaPartsOther: string;

  constructor(private route: ActivatedRoute, private service: RpmRemarkService,
    private serviceConstructives: RpmConstructivesService, public auth: AuthService,
    private toaster: ToasterComponent, private nsiService: NsiService) {

  }

  ngOnInit() {
    console.log(this.infoSelectInfo);
    //this.areaId = this.route.snapshot.paramMap.get('id');
    this.loadCriticalites();
    this.loadConstructives();
    this.loadStatuses();

  }

  ngOnChanges() {
    console.log(this.infoSelectInfo);
    this.getIdCheckList(this.areaId);
    this.areaPartId = localStorage.getItem('treeViewPartId');
    this.modalRpm.areaPartId = localStorage.getItem('treeViewPartId');
  }

  loadAll() {
    this.areaPartId = null;
    this.selectedConstructiveId = null;
    this.selectedCriticalityId = null;
    this.selectedStatusId = null;
    this.getIdCheckList(this.areaId);
  }


  getIdCheckList(areaId: string) {
    this.service.getCheckListId(areaId).subscribe(
      data => {
        if (data.success) {
          this.answerListId = data.result.answerListId;
          this.checkListId = data.result.id;
          this.modalRpm.checkListId = data.result.id;
          this.modalRpm.answerListId = data.result.answerListId;
          this.getRemarks();
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
  loadStatuses() {
    this.service.getStatuses().subscribe(x => {
      this.statuses = x;
    });
  }
  loadCriticalites() {
    this.service.getCriticalites().subscribe(
      data => {
        if (data.success) {
          this.criticalites = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  showEditVisable(vis: boolean) {
    this.newVariantRemark = '';
    this.modalRpm.remarkTypeId = '0';
    this.isEditVisable = vis;
  }

  reset() {
    this.selectedConstructiveId = null;
    this.selectedCriticalityId = null;
    this.selectedStatusId = null;
    this.getRemarks();
  }

  getRemarks() {
    this.areaPartId = localStorage.getItem('treeViewPartId');
    this.remarkList = new Remarks();
    this.service.getRemarksList(this.areaId, this.areaPartId,
      this.selectedConstructiveId, this.selectedCriticalityId,
      this.selectedStatusId).subscribe(
      data => {
        if (data.success) {
          this.remarkList = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
      );
  }


  addRpmRemark() {
    this.statusClick = true;
    if (this.areaPartId == null) {
      this.statusClick = false;
      this.toaster.popToast('error', 'Внимание!', 'Вы не выбрали расположение');
      return;
    }
    let model = {
      areaId: this.areaId,
      areaName: this.areaName,
      ChecklistId: this.modalRpm.checkListId,
      RemarkTypeId: this.modalRpm.remarkTypeId,
      ConstructiveId: this.modalRpm.constructiveId,
      CriticalityId: this.modalRpm.criticalityId,
      AreaPartId: this.areaPartId,
      Criticaled: this.modalRpm.criticaled,
      Answer: {
        Photos: this.modalRpm.photos,
        Comment: this.modalRpm.comment,
        StatusId: 1,
        AnswerListId: this.modalRpm.answerListId,
        isNew: true,
        Place: this.modalRpm.place
      }
    };

    this.service.addRpmRemark(model).subscribe(
      data => {
        this.statusClick = true;
        if (data.success) {
          jQuery("#modalAddReamrk").modal('hide');
          this.typeRemark1 = null;
          this.typeRemark2 = null;
          this.modalRpm = new AddRepamrkTemplate();
          this.modalRpm.answerListId = model.Answer.AnswerListId;
          this.modalRpm.areaPartId = model.AreaPartId;
          this.modalRpm.checkListId = model.ChecklistId;
          this.toaster.popToast('success', 'Внимание!', 'Данные успешно добавлены');
          this.getRemarks();
          this.statusClick = false;

        } else {
          this.toaster.popToast('error', 'Внимание!', 'Пожалуйста, заполните все поля');
          this.statusClick = false;
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
        this.statusClick = false;
      }
    );
  }

  loadConstructives() {
    this.serviceConstructives.getConstructives().subscribe(
      data => {
        if (data.success) {
          this.constructives = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
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
    this.service.getRemarkTypes(parentId, constructiveId).subscribe(
      data => {
        if (data.success) {
          if (numberSel === 1) {
            this.typeRemark1 = data.result;
          }
          if (numberSel === 2) {
            this.typeRemark2 = data.result;
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


  saveRemarkType() {
    let model = {
      ConstrictiveId: this.modalRpm.constructiveId,
      ParentId: this.modalRpm.remark1Model,
      Name: this.newVariantRemark
    }

    this.service.addRemarkType(model).subscribe(
      data => {
        if (data.success) {
          this.toaster.popToast('success', 'Внимание!', 'Данные успешно добавлены');
          this.showEditVisable(false);
          this.loadTypeRemark(this.modalRpm.constructiveId, 2, this.modalRpm.remark1Model);
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );

  }

  isInPartsTrue(areaPart: string): boolean {
    this.areaPartsOther = 'Благоустройство,Фасад,Кровля,Цокольный этаж,Чердачное помещение,Встроенный паркинг,Отдельно стоящий паркинг';
    var apo = areaPart.toLowerCase().split(',');
    for (let i = 0; i < apo.length; i++) {
      console.log(this.areaPartsOther.indexOf(apo[i]));
      if (this.areaPartsOther.toLowerCase().split(',').indexOf(apo[i]) > -1) {
        return true;
      }
    }
  }




}

class AddRepamrkTemplate {
  checkListId: string;
  constructiveId: string;
  remark1Model: string;
  remarkTypeId: string;
  photos: File64[];
  criticalityId: number;
  comment: string;
  answerListId: string;
  areaPartId: string;
  criticaled: boolean = false;
  place: string;
}