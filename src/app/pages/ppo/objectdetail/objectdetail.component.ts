import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../../services/data.service';
declare var jQuery: any;
import 'rxjs/add/operator/switchMap';
import { File64 } from '../../common/file/file.component';

import { ToasterService, Toast, ToasterConfig } from 'angular2-toaster';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
import { ObjectService, CancelAudit } from '../../../services/ppo/object.service';
import { CalendarSettings } from '../../../CalendarSettings';
import { AuthService } from '../../../services/common/auth.service';
import { Nsi } from '../../../services/models/models';
import { NsiService } from '../../../services/nsi.service';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';

export class Calendar {
  rus: any;
  minDate: Date;
  maxDate: Date;
}
@Component({
  moduleId: module.id,
  selector: 'app-objectdetail',
  templateUrl: 'objectdetail.component.html',
  styleUrls: ['objectdetail.component.css'],
  providers: [ToasterComponent]
})

export class ObjectdetailComponent implements OnInit {

  apiUrl: string;
  appeointUserAddForm: FormGroup;
  inviteForm: FormGroup;
  areaId: string;
  areaInfo: any;
  users: any;
  role: string;
  appeointVisable: boolean;
  optionSelected: any;
  usersSelect: any[] = [];
  displayAddLeader = 'none';
  selectedUserId: string;
  act: File64;
  fileCheckList: File64;
  appr: any;
  apprID: string;
  apprDate: string;
  apprNotes: string;
  approvedFile: File64;


  dateValue: Date;
  typeErrorToaster: string;
  msgToaster: string;
  errorMessage = '';
  headerTextToaster: string;
  calendar: Calendar;
  textComent: string;
  cancelAuditModel = new CancelAudit();

  modelInvitation: InvitationPostModel = new InvitationPostModel();
  invitationInfo: InvitationInfo[];
  auditTypes: Nsi[];

  constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService,
    private service: DataService, private serviceArea: ObjectService, private toaster: ToasterComponent, private nsi: NsiService,
    private location: Location) {
    this.appeointUserAddForm = new FormGroup({
      'selectedUser': new FormControl('', Validators.required)
    });
    this.inviteForm = new FormGroup({
      'auditTypeId': new FormControl('', Validators.required),
      'file': new FormControl('', Validators.required),
      'text': new FormControl('', Validators.required),
      'invitationDateTime': new FormControl('', Validators.required),
      'linkKHD': new FormControl('', Validators.required)
    });
    this.calendar = <Calendar>{};
    this.calendar.rus = CalendarSettings.ru;
    this.modelInvitation = <InvitationPostModel>{};
  }

  ngOnInit() {
    this.areaId = this.route.snapshot.paramMap.get('id');
    this.role = localStorage.getItem('roles');
    this.getAreaInfo();
    this.appeointVisable = true;
    this.getInvitations();
    this.getAuditTypes();
    this.apiUrl = environment.apiUrl;
  }
  onPressBack() {
    this.location.back();
  }
  clearMessage() {
    this.errorMessage = '';
  }

  cancelRKComent() {
    this.cancelAuditModel.areaId = this.areaInfo.id;
    this.cancelAuditModel.userId = this.areaInfo.leaders[0].id;
    this.cancelAuditModel.id = this.areaInfo.rkAudit.id;
    this.serviceArea.сancelAuditRK(this.cancelAuditModel).subscribe(
      i => {
        if (i.success) {
          this.getAreaInfo();
          jQuery("#cancelRK").modal('hide');
        } else {
          this.toaster.popToast('error', 'Внимание!', 'Ошибка при отмене рабочей комиссии');
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getAuditTypes() {
    //console.info('audit types get');
    this.nsi.auditTypes().subscribe(data => {
      this.auditTypes = data;
    });
  }

  onSelect({ id, text }) {
    console.log(text);
  }

  setInvitation() {
    jQuery("#modalInvitation").modal('hide');
    this.modelInvitation.areaId = this.areaId;
    this.serviceArea.sendInvitation(this.modelInvitation).subscribe(
      data => {
        if (data) {
          this.toaster.popToast('success', 'Внимание!', 'Приглашение успешно отправленно');
          this.getInvitations();
        } else {
          if (this.modelInvitation.auditTypeId !== '2') {
            this.toaster.popToast('error', 'Ошибка', 'Рабочая и Предварительная комиссия можно создать только один раз!!!');
          } else {
            this.toaster.popToast('error', 'Ошибка',
              'Приёмочной комиссии не может быть создана раньше даты исправления гарантийного письма поставленной РП');
          }
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
  getInvitations() {
    this.clearMessage();
    this.serviceArea.getInvitations(this.areaId).subscribe(
      data => {
        this.invitationInfo = data;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  infoApproved(id: string) {
    this.apprID = id;
  }
  selectAppr(appr) {
    this.appr = appr;
  }

  approved(status: boolean) {
    this.clearMessage();
    this.serviceArea.setApproved(this.apprID, this.approvedFile, this.apprDate, this.apprNotes, status).subscribe(
      data => {
        /*if (this.areaInfo.isCanCreateRk === true && this.areaInfo.isCanCreatePk === false) {
          this.addAuditRK();
        }
        if (this.areaInfo.isCanCreatePk === true && this.areaInfo.isCanCreateRk === false) {
          this.addAuditPK();
        }*/

        this.toaster.popToast('success', '', 'Данные успешно сохранены');
        jQuery('#modalApprovedFile').modal('hide');
        this.getInvitations();
        this.getAreaInfo();

      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  getAreaInfo() {
    this.clearMessage();
    this.service.getObjectDetailInfo(this.areaId).then(
      data => {
        this.areaInfo = data;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  appointUser(idPk: string) {
    this.clearMessage();
    this.getUsersList('PpoInspector');
    this.appeointVisable = false;
    jQuery('#pkId').val(idPk);
    this.appeointUserAddForm.controls['selectedUser'].setValue('');
  }

  appeointUserAdd(idUser: any, auditInspectorId: any) {
    this.clearMessage();
    this.areaInfo = [];
    this.service.setAppeointUser(idUser, auditInspectorId).subscribe(
      data => {
        if (data.success) {
          this.getAreaInfo();
          jQuery("#modalLeaderCheckList").modal("hide");
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  generateFixCheckList(inspectorId: string) {
    this.clearMessage();
    this.serviceArea.setGenerateFixCheckList(this.areaId, inspectorId).subscribe(
      data => {
        //console.log(data);
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  uploadAct() {
    this.clearMessage();
    this.service.uploadAct(this.areaInfo.id, this.act).subscribe(
      data => {

        if (data.success) {
          this.getAreaInfo();
          jQuery("#modalAct").modal("hide");
          this.act = null;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      }
    );
  }

  uploadCheckList() {
    this.clearMessage();
    this.service.uploadCheckList(this.areaInfo.id, this.fileCheckList).subscribe(
      data => {

        if (data.success) {
          this.getAreaInfo();
          jQuery("#modalCheckList").modal("hide");
          this.act = null;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      }
    );
  }


  loadUserList(roleName: string) {
    this.clearMessage();
    this.getUsersList(roleName);
  }

  addAuditRK(dateAudit?) {
    this.clearMessage();
    this.serviceArea.issetAreaStandart(this.areaId).subscribe(
      data => {
        if (data.success) {
          this.service.setAddAuditRK(this.areaId, dateAudit).subscribe(
            data => {
              if (data.success) {
                this.getAreaInfo();
              } else {

                if (data.message === "Вы не прикрепили стандарты для этого объекта") {
                  this.errorMessage = data.message;
                } else {
                  this.toaster.popToast('error', 'Внимание!', data.message);
                }
              }
            },
            error => {
              this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
            });
        } else {
          this.errorMessage = data.message;
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  addAuditPK() {
    this.clearMessage();
    this.service.setAddAuditPK(this.areaId).subscribe(
      data => {
        if (data.success) {
          this.getAreaInfo();
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getUsersList(role: string) {
    this.clearMessage();
    this.users = [];
    this.service.getUsers(role).subscribe(
      data => {
        this.users = data.result;
      }
    );
  }
}

export class InvitationInfo {
  id: string;
  text: string;
  projectManagerId: string;
  invitationDateTime: string;
  contacts: string;
  isApproved: boolean;
  areaId: string;
  sysDateCreated: Date;
  sysDateUpdated: Date;
  approvedDate: string;
  notes: string;
  validDate: Date;
  linkKHD: string;
}

export class InvitationPostModel {
  invitationDateTime: Date;
  text: string;
  areaId: string;
  file: File64;
  auditTypeId: string;
  linkKHD: string;
}