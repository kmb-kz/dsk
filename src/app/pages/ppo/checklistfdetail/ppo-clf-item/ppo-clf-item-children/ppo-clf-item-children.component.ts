import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckListFItem } from '../../../../../services/models/ppo/fixCL/checklistf-item.model';
import { AuthService, Claims } from '../../../../../services/common/auth.service';
import { FixClService, CheckPostModel } from '../../../../../services/ppo/fix-cl.service';
import { ToasterComponent } from '../../../../../components/toaster/toaster.component';
import { ModalDateCorrected, ModalDate, Calendar } from '../../checklistfdetail.component';
import { CalendarSettings } from '../../../../../CalendarSettings';
import { File64 } from '../../../../common/file/file.component';
import { Nsi } from '../../../../../services/models/models';
import { NsiService } from '../../../../../services/nsi.service';
import { ResponseModel } from '../../../../../services/cns/cns-partner.service';
declare var jQuery: any;

@Component({
  selector: 'app-ppo-clf-item-children',
  templateUrl: './ppo-clf-item-children.component.html',
  styleUrls: ['./ppo-clf-item-children.component.css']
})
export class PpoClfItemChildrenComponent implements OnInit {

  @Input() standardName: string;
  @Input() standardPictureUrl: string;
  @Input() children: CheckListFItem;
  @Input() answerListId: string;
  @Input() answerListStatusId: string;
  @Input() breakdown: ResponseModel<Nsi[]>;

  @Output() check = new EventEmitter();
  checkModel: CheckPostModel = new CheckPostModel();
  modalDateCorrected: ModalDateCorrected = new ModalDateCorrected();
  modalDate: ModalDate = new ModalDate();
  calendar: Calendar;
  //modal flags 
  displayCheck: boolean = false;
  displayGrLetter: boolean = false;
  isEditVisable: boolean = false;
  breakdownName: string;
  constructor(public auth: AuthService, private service: FixClService, private toaster: ToasterComponent,
    private nsi: NsiService
  ) { }



  ngOnInit() {
    this.initCalendar();
  }

  @Input() claims: Claims;

  isInRole(roles: string): boolean {
    var rolesArray = roles.toLowerCase().split(',');
    for (let i = 0; i < rolesArray.length; i++) {
      if (this.claims && this.claims.roles.toLowerCase().split(',').indexOf(rolesArray[i]) > -1) {
        return true;
      }
    }
    return false;
  }
  onSelecteDate(num: number) {
    if (num == 1) {
      this.modalDateCorrected.dateValue = null;
    } else {
      this.modalDateCorrected.dateValue1 = null;
    }
  }


  showEditVisable(vis: boolean) {
    this.isEditVisable = vis;
  }

  saveBreakdown() {
    this.nsi.addRemarkBreakdown(this.breakdownName, 3).subscribe(
      i => {
        if (i.success) {
          this.showEditVisable(false);
          this.getRemarkBreakdown();
        }

      }, error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }

  getRemarkBreakdown() {
    this.nsi.remarkBreakdown(3).subscribe(
      i => {
        this.breakdown = i;
      }, error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }


  initCalendar() {
    let today = new Date();
    let nextMonth = (today.getMonth() === 11) ? 0 : today.getMonth() + 1;
    let nextYear = ((today.getMonth() === 11))
      ? today.getFullYear() + 1 : today.getFullYear();

    this.calendar = <Calendar>{};
    this.calendar.rus = CalendarSettings.ru;
    this.calendar.minDate = new Date();
    this.calendar.minDate.setMonth(today.getMonth());
    this.calendar.minDate.setFullYear(today.getFullYear());
    this.calendar.maxDate = new Date();

    this.calendar.maxDate.setMonth(nextMonth);
    this.calendar.maxDate.setFullYear(nextYear);

  }
  /*
    cancelCheckList(answerItemId, checkListId, itemId, index, typeCheckList) {
      this.service.cancelCheckList(answerItemId, this.checklistId, index).subscribe(
        data => {
          if (data.success) {
            this.getChangeItemInfo(data.result);
          } else {
            this.toaster.popToast('error', 'Внимание!', data.message);
          }
        },
        error => {
          this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
        }
      );
    }
  
   
    setData() {
      this.modalDate.date = new Date(this.modalDate.dateValue).toLocaleDateString();
      this.service.dateCoreccted(this.modalDate.answerItemId, this.modalDate.date, null).subscribe(
        data => {
          if (data.success) {
            this.getChangeItemInfo(this.cli.answerItemId);
              jQuery("#modalDate").modal("hide");
          } else {
            this.toaster.popToast('error', 'Внимание!', data.message);
          }
        },
        error => {
          this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
        }
      );
    }
  
  
    selDate(id: string, index, indexParent) {
      this.modalDate.answerItemId = id;
      this.modalDate.index = index;
      this.modalDate.indexParent = indexParent;
      this.modalDate.dateValue = null;
    }
  
  
    selDateCorrected(id: string, index, indexParent) {
      this.modalDateCorrected.answerItemId = id;
      this.modalDateCorrected.index = index;
      this.modalDateCorrected.indexParent = indexParent;
      this.modalDateCorrected.grLetter = null;
      this.modalDateCorrected.dateValue = null;
      this.modalDateCorrected.dateValue1 = null;
    }
  */

  setDateCorrected() {
    if (this.modalDateCorrected.dateValue == null && this.modalDateCorrected.grLetter != null) {
      this.toaster.popToast('error', 'Внимание!', 'Вы не ввели дату исправление');
      return;
    }
    if (this.modalDateCorrected.grLetter == null && this.modalDateCorrected.dateValue != null) {
      this.toaster.popToast('error', 'Внимание!', 'Вы не указали файл');
      return;
    }

    if (this.modalDateCorrected.dateValue != null && this.modalDateCorrected.grLetter != null) {
      this.modalDateCorrected.date = new Date(this.modalDateCorrected.dateValue).toLocaleDateString();
    }
    if (this.modalDateCorrected.dateValue1 != null && this.modalDateCorrected.grLetter == null) {
      this.modalDateCorrected.date = new Date(this.modalDateCorrected.dateValue1).toLocaleDateString();
    }

    this.displayGrLetter = false;
    this.service.dateCorected(this.children.answerItemId, this.modalDateCorrected.date,
      this.modalDateCorrected.grLetter).then(
      data => {
        if (data.success) {
          this.getChangeItemInfo(this.children.answerItemId);
          this.modalDateCorrected.date = null;
          this.check.emit();
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
      );
  }
  histories: any[];
  displayHistories = false;
  loadHistories(itemId) {
    this.displayHistories = true;
    this.histories = null;
    this.service.loadHistory(itemId).subscribe(i => {
      this.histories = i.result;
    });
  }
  getChangeItemInfo(answerItemId: string) {
    this.service.getItemFix(answerItemId).then(
      data => {
        this.children.answerItemId = data.answerItemId;
        this.children.dateCorrected = data.dateCorrected;
        this.children.issetComment = data.issetComment;
        this.children.comment = data.comment;
        this.children.userAnswer = data.userAnswer;
        this.children.issetPhotos = data.issetPhotos;
        this.children.pictures = data.pictures;
        this.children.grLetterUrl = data.grLetterUrl;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
  showCheckDialog(answerId) {
    this.checkModel.answerTypeId = answerId;
    this.displayCheck = true;
    jQuery("#checkedModal").modal('show');
  }
  answerItemId: Promise<any>;

  checkAnswersId() {
    this.checkModel.answerListId = this.answerListId;
    this.checkModel.itemId = this.children.id;
    this.checkModel.comment = jQuery(".check-comment").val();

    if ((this.checkModel.answerTypeId == '2') || (this.checkModel.answerTypeId == '3')) {
      if (this.checkModel.files.length === 0) {
        this.toaster.popToast('error', 'Внимание!', 'Вы не добавили фото к замечании');
        return;
      }
    }
    if (this.checkModel.answerTypeId == '1') {
      if (this.checkModel.breakdownId == '') {
        this.toaster.popToast('error', 'Внимание!', 'Вы не выбрали из списка выбара');
        return;
      }
    }

    jQuery("#checkedModal").modal('hide');
    this.answerItemId = this.service.check(this.checkModel);
    this.answerItemId.then(
      data => {
        if (data.success) {
          this.displayCheck = false;
          this.getChangeItemInfo(data.result);
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
    this.check.emit();
  }

  hideGrLetterDialog() {
    this.displayGrLetter = false;
  }
  hideCheckDialog() {
    this.displayCheck = false;
  }
  onDelPhoto($event) {
    jQuery('#p_' + $event).remove();
    this.getChangeItemInfo(this.children.answerItemId);

  }
  showImageFlag: boolean = false;
  showImage() {
    this.showImageFlag = !this.showImageFlag;
  }

}


