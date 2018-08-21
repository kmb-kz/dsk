import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CalendarSettings } from '../../../CalendarSettings';
import { FormsModule, Validators, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { File64 } from '../../common/file/file.component';
import { Nsi } from '../../../services/models/models';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
import { ObjectService } from '../../../services/ppo/object.service';
import { Calendar, ModalDateCorrected } from '../checklistfdetail/checklistfdetail.component';
import { AuthService } from '../../../services/common/auth.service';
import { DateHelpers } from '../../../helpers/date-helpers';

declare var jQuery: any;
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-checklistdetail',
  templateUrl: 'checklistdetail.component.html',
  styleUrls: ['checklistdetail.component.css'],
  providers: [ToasterComponent]
})

export class ChecklistdetailComponent implements OnInit {

  addRemarkForm: FormGroup;
  idCheckList: string;
  checkListInfo: Checklist; // any[] = [];
  isExpired: boolean;
  constructiveInfo: any;
  errorMessage = '';
  alertErrorMessage = '';
  alertInfo = '';
  textCompliesCheck = '';
  role: string;
  public display = false;
  rus: any;
  photos = new Array<File64>();
  fileLetter = new File64();
  minDate: Date;
  maxDate: Date;
  today = new Date();
  statistic: Statistic;
  dateValueSet: string;
  IsCritical: boolean;
  comment: string;
  calendar: Calendar;
  modalDateCorrected: ModalDateCorrected;
  dateValue: Date;
  dateValue1: Date;
  histories: any[];

  constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService,
    private service: DataService, private objectService: ObjectService,
    private toaster: ToasterComponent, private dateHelper: DateHelpers) {
    this.addRemarkForm = new FormGroup({
      'IsCriticalChecked': new FormControl(false, Validators.required),
      'constructiveSelected': new FormControl('', Validators.required),
      'inPhotos': new FormControl('', Validators.required),
      'textRemark': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
    });
    let nextMonth = (this.today.getMonth() === 11) ? 0 : this.today.getMonth() + 1;
    let nextYear = ((this.today.getMonth() === 11))
      ? this.today.getFullYear() + 1 : this.today.getFullYear();

    this.calendar = <Calendar>{};
    this.calendar.rus = CalendarSettings.ru;
    this.calendar.minDate = new Date();
    this.calendar.minDate.setMonth(this.today.getMonth());
    this.calendar.minDate.setFullYear(this.today.getFullYear());
    this.calendar.maxDate = new Date();
    this.calendar.maxDate.setMonth(nextMonth);
    this.calendar.maxDate.setFullYear(nextYear);
  }

  ngOnInit() {
    this.idCheckList = this.route.snapshot.paramMap.get('id');
    this.role = localStorage.getItem('roles');
    this.getFreeCLList(this.idCheckList);
    this.getConstuctiveList();
    this.initCalendar();

  }

  initCalendar() {
    this.rus = CalendarSettings.ru;
    let nextMonth = (this.today.getMonth() === 11) ? 0 : this.today.getMonth() + 1;
    let nextYear = ((this.today.getMonth() === 11))
      ? this.today.getFullYear() + 1 : this.today.getFullYear();

    this.rus = CalendarSettings.ru;
    this.minDate = new Date();
    this.minDate.setMonth(this.today.getMonth());
    this.minDate.setFullYear(this.today.getFullYear());
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
  }

  clearFileLetter() {
    this.fileLetter.size = null;
    this.fileLetter.base64String = null;
    this.fileLetter.openSelector = null;
    this.fileLetter.fileName = null;
  }

  getFreeCLList(idCheck) {
    this.service.getFreeCItemLList(idCheck).subscribe(
      data => {
        this.checkListInfo = data;
        this.isExpired = this.dateHelper.getDateDiff(this.checkListInfo.dateExpired, moment()) < 0;
        this.updateStatistic();
      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );
  }

  getItem(answerItemId, index, constrIndex) {
    this.service.getItem(answerItemId).subscribe(data => {
      this.checkListInfo.constructives[constrIndex].items[index] = data;
      this.updateStatistic();
    });

  }

  compliesCheck(answerItemId, isCorrected, comment, index, constrIndex) {
    this.service.setCompliesCheck(answerItemId, isCorrected, comment, this.photos).subscribe(
      data => {
        if (data.success === true) {
          this.getItem(answerItemId, index, constrIndex);
          jQuery('#modalСompliesCheck').modal('hide');

          //this.getFreeCLList(this.idCheckList);
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');

      }
    );
  }

  addRemark(answerListId, FreeCLId, textRemark, constructiveId, IsCritical, comment) {
    this.service.setAddRemark(answerListId, FreeCLId, textRemark, constructiveId, IsCritical, this.photos, comment).subscribe(
      data => {
        if (data.success === true) {
          this.getFreeCLList(this.idCheckList);
          jQuery('#modalAddReamrk').modal('hide');
          this.photos = [];
          jQuery('#IsCriticalChecked').prop('checked', false);
          jQuery('#constructiveIdSelected').val(0);
          jQuery('#textRemarkValue').val('').empty();

        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getConstuctiveList() {
    this.objectService.getConstructives(1).subscribe(
      data => {
        this.constructiveInfo = data;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  updateStatistic() {
    this.statistic = new Statistic();
    this.checkListInfo.constructives.forEach(element => {
      element.items.forEach(item => {
        this.statistic.countAll++;
        if (item.answers[0] != null) {
          this.statistic.countMarked++;
          if (item.isCritical) {
            this.statistic.countIsCritical++;
          }
          if (item.answers[0].isCorrected) {
            this.statistic.countSuccess++;
          } else {
            this.statistic.countError++;
          }
        }
        if (item.answers[0] == null) {
          this.statistic.countNotMarked++;
        }
      });
    });
  }

  showModalRemark() {
    this.photos = [];
    jQuery('#IsCriticalChecked').prop('checked', false);
    jQuery("#modalAddReamrk").modal("show");
    jQuery("#textRemarkValue").val('');
    jQuery("#comment").val('');
    jQuery("#constructiveIdSelected").val(0);
    this.photos = null;

  }

  showModal(answerItemId, isCorrected, index, constrIndex) {
    this.textCompliesCheck = this.checkListInfo.constructives[constrIndex].items[index].answers[0].comment;
    //console.info(this.textCompliesCheck);
    jQuery("#textCompliesCheck").val(this.textCompliesCheck);
    jQuery("#answerItemId").val(answerItemId);
    jQuery("#isCorrected").val(isCorrected);
    jQuery("#index").val(index);
    jQuery("#constrIndex").val(constrIndex);
    jQuery("#modalСompliesCheck").modal("show");
    this.photos = null;
  }
  getCommentFreeCL(answerListId, itemid) {
    this.service.getFreeCLComment(answerListId, itemid).subscribe(
      data => {
        this.textCompliesCheck = data;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  setAttrFancy(id: string) {
    jQuery('#infoCheck_' + id).attr('data-fancybox', 'group_' + id);
  }

  openFormAddRemark() {
    this.addRemarkForm.reset();
    this.addRemarkForm.controls['constructiveSelected'].setValue('');
  }

  checkListFinish(idCheckList) {
    this.service.setCheckListFinished(idCheckList).subscribe(
      data => {
        if (data.success && data.result === true) {
          this.service.setCheckListFinish(idCheckList).subscribe(
            data => {
              if (data.success) {
                this.getFreeCLList(idCheckList);
                this.alertInfo = 'Данные успешно отправлены. Статус: Заполнен испектором';
              } else {
                this.toaster.popToast('error', 'Внимание!', data.message);
              }
            },
            error => {
              this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
            }
          );
        } else {
          this.errorMessage = 'Ошибка при проверке чек листа (некоторые данные не заполнены)';
        }
      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );
  }

  showModalDateCorrected(ansId, index, constrIndex) {
    jQuery("#selDateCorrectedAnsId").val(ansId);
    jQuery("#indexDateCorrected").val(index);
    jQuery("#constrIndexDateCorrected").val(constrIndex);
    this.fileLetter.base64String = null;
    this.fileLetter.fileName = null;
    this.fileLetter.openSelector = null;
    this.fileLetter.size = null;
    this.dateValue = null;
    this.dateValue1 = null;
  }

  setDateCorrectedFree(selDateCorrectedAnsId, dateValue, dateValue1, index, constrIndex) {

    if (dateValue == null && this.fileLetter.size != null ) {
      this.toaster.popToast('error', 'Внимание!', 'Вы не ввели дату исправление');
      return;
    }
    if (this.fileLetter.size == null && dateValue != null ) {
      this.toaster.popToast('error', 'Внимание!', 'Вы не указали файл');
      return;
    }
    if (dateValue != null && this.fileLetter.size != null) {
      this.dateValueSet = new Date(dateValue).toLocaleDateString();
    }

    if (dateValue == null && this.fileLetter.size == null) {
      this.dateValueSet = new Date(dateValue1).toLocaleDateString();
    }
    this.service.setDateCorrectedFreeCl(selDateCorrectedAnsId, this.dateValueSet, this.fileLetter).subscribe(
      data => {
        if (data.success) {
          this.getFreeCLList(this.idCheckList);
          jQuery("#modalDateCorrected").modal('hide');
          this.dateValueSet = null;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  OnDelPhoto($event) {
    jQuery('#p_' + $event).remove();
  }

  loadHistories(itemId) {
    this.histories = null;
    this.service.loadHistory(itemId).subscribe(i => {
      this.histories = i.result;
    });
  }
}
export class Constructive {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export class ChecklistItem {
  id: string;
  isCritical: boolean;
  dateCreated: Date;
  remark: string;

  answers: Answer[];
}

export class Checklist {
  title: string;
  object: Nsi;
  filterStatus: 1;
  auditType: Nsi;
  status: Nsi;
  id: string;
  dateCreated: Date;
  dateExpired: Date;
  answerListId: string;
  constructives: Constructive[];
}

export class Answer {
  id: string;
  isCorrected: boolean;
  dateCreated: Date;
  dateCorrected: Date;
  photos: string[];
  issetPhotos: boolean;
  issetComment: boolean;
  grLetterUrl: string;
  comment: string;
}

export class Statistic {
  countAll: number = 0;
  countAllStandards: number = 0;
  countSuccessStandards: number = 0;
  countMarked: number = 0;
  countNotMarked: number = 0;
  countNotChecked: number = 0;
  countSuccess: number = 0;
  countError: number = 0;
  countNotApplicable: number = 0;
  countIsCritical: number = 0;
}

export class ResponseDefault {
  success: boolean;
  message: string;
  result: string;
}
