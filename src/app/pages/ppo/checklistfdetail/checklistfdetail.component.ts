import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FixClService } from '../../../services/ppo/fix-cl.service';
import { StatisticService } from '../../../services/statistic.service';
import { File64 } from '../../common/file/file.component';
import { CalendarSettings } from '../../../CalendarSettings';
import { Statistic } from '../checklistdetail/checklistdetail.component';
import { Nsi } from '../../../services/models/models';
import { User } from '../../../services/models/user';
import { CheckListFix } from '../../../services/models/ppo/fixCL/checklistf.model';
import { Parent } from '../../../services/models/ppo/fixCL/parent.model';
import { SelectedParent } from '../../../services/models/ppo/fixCL/selected-parent.model';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
import { AuthService, Claims } from '../../../services/common/auth.service';
import { DateHelpers } from '../../../helpers/date-helpers';

import * as moment from 'moment';
import { NsiService } from '../../../services/nsi.service';
import { ResponseModel } from '../../../services/cns/cns-partner.service';


export class ModalDate {
  answerItemId: string;
  date: string;
  dateValue: Date;
  index: number;
  indexParent: number;
}

export class ModalDateCorrected {
  answerItemId: string;
  grLetter: File64;
  date: string;
  dateValue: Date;
  dateValue1: Date;
  index: number;
  indexParent: number;
}
export class Calendar {
  rus: any;
  minDate: Date;
  maxDate: Date;
}

@Component({
  moduleId: module.id,
  selector: 'app-checklistfdetail',
  templateUrl: 'checklistfdetail.component.html',
  styleUrls: ['checklistfdetail.component.css'],
  providers: [ToasterComponent]
})

export class ChecklistfdetailComponent implements OnInit {
  errorMessage = '';
  answerListId: string;
  ///чек лист 
  checkListInfo: CheckListFix;
  itemsList: Parent[];
  statisticInfo: Statistic;
  selectedParent: SelectedParent;
  isExpired: boolean;
  filterIdAns: number = 1;
  claims: Claims;
  remarkBreakdown: ResponseModel<Nsi[]>;

  constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService,
    private service: FixClService, private serviceStatistic: StatisticService,
    private nsi: NsiService,
    private toaster: ToasterComponent, private dateHelper: DateHelpers) { }

  ngOnInit() {
    this.answerListId = this.route.snapshot.paramMap.get('id');
    this.selectedParent = <SelectedParent>{};
    this.selectedParent.filterType = 1;
    this.itemsByParent(this.answerListId);
    this.claims = this.auth.getClaims();
    this.getRemarkBreakdown();
  }


  getRemarkBreakdown() {
    this.nsi.remarkBreakdown(3).subscribe(
      i => {
        this.remarkBreakdown = i;
      }, error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }

  itemsByParent(id) {
    this.service.getItemsByParentId(id).then(
      data => {
        this.itemsList = data;
        this.selectedParent = <SelectedParent>{};
        this.selectedParent.id = this.itemsList[0].id;
        this.selectedParent.index = 0;
        this.selectedParent.filterType = 1;
        this.selectedInfo(this.selectedParent.id, this.selectedParent.index);
      }
    );
  }
  statisticsByItem(answerListId, itemId) {

    this.service.getStatisticByParentId(answerListId, itemId).then(data => {
      this.selectedParent.statistic = data;
      this.itemsList[this.selectedParent.index].statistics = data;
    });
  }
  selectedInfo(id, index) {
    this.selectedParent.id = id,
    this.selectedParent.index = index;
    this.selectedParent.statistic = this.itemsList[index].statistics;

    this.service.getFixCl(this.answerListId, this.selectedParent.id, this.selectedParent.filterType).then(
      data => {
        this.checkListInfo = data;
        this.isExpired = this.dateHelper.getDateDiff(moment(), this.checkListInfo.dateExpired) < 0;
        this.getStatisticsInfo();
        /* if (this.checkListInfo.statisticId != null) {
           this.getStatisticsInfo(this.checkListInfo.statisticId);
         } else {
           this.statisticInfo = null;
         }*/
      }
    );
  }
  checkListFinish() {
    this.service.setCheckFinished(this.checkListInfo.id).subscribe(
      data => {
        if (data) {
          this.service.setFinished(this.checkListInfo.id).subscribe(
            data => {
              if (data.success) {
                this.itemsByParent(this.answerListId);
              } else {
                this.toaster.popToast('error', 'Внимание!', data.message);
              }
            },
            error => {
              this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
            }
          );
        } else {
          this.toaster.popToast('error', 'Внимание!', 'Ошибка при проверке чек листа (некоторые данные не заполнены)');
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
  getStatisticsInfo() {
    this.serviceStatistic.getStatistics(this.answerListId).then(
      data => {
        this.statisticInfo = data.result;
      }
    );
  }


  filterAnswerId(id: number) {
    this.selectedParent.filterType = id;
    this.selectedInfo(this.selectedParent.id, this.selectedParent.index);
  }

  refresh() {

    this.statisticsByItem(this.answerListId, this.selectedParent.id);
  }

}
