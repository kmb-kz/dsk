import { Component, OnInit, Input, EventEmitter, Output, Injectable } from '@angular/core';
import {
  Remarks, Decline, DateCorrectedModel,
  CheckListCorrectedModel, RpmRemarkService, RemarkAnswerAddViewModel
} from '../../../../../services/rpm/rpm-remark.service';
import { ActivatedRoute } from '@angular/router';
import { Calendar } from 'primeng/components/calendar/calendar';
import { DoneCheckListModel } from '../rpm-remark-checklist.component';
import { ToasterComponent } from '../../../../../components/toaster/toaster.component';
import { AdUserInfo } from '../../../../../services/models/AdUserInfo';
import { AuthService } from '../../../../../services/common/auth.service';
declare var jQuery: any;

@Injectable()
export class RpmRemarkChecklistComponentModel {
  Id: string;
  AnswerItemId: string;
  CheckListItemId: string;
  Comment: string;
  DateStartCorected: string;
  DateEndCorected: string;
}

export class AnswerItem {
  comment: string;
  dateOfCorrectionStart: string;
  dateOfCorrectionFinish: string;
  statusId: number;
  itemId: string;
  answerListId: string;

}

@Component({
  selector: 'app-rpm-remark-checklist-one',
  templateUrl: './rpm-remark-checklist-one.component.html',
  styleUrls: ['./rpm-remark-checklist-one.component.css'],
  providers: [RpmRemarkChecklistComponentModel]
})
export class RpmRemarkChecklistOneComponent implements OnInit {

  @Input() item: any;
  @Input() answerListId: string;
  @Input() breakdown: any[];
  decCache = [];
  decCases = [2, 0, 1, 1, 1, 2];
  titles = ['день', 'дня', 'дней'];
  constructor(private route: ActivatedRoute,
    private service: RpmRemarkService, private toaster: ToasterComponent, public auth: AuthService) {

  }

  ngOnInit() {
  }

  load() {
    this.service.getRemarkItem(this.item.id).subscribe(
      data => {
        this.item = data;
      }
    );
  }

  refresh() {
    this.load();
  }

  decOfNum(number) {

    if (!this.decCache[number]) {
      this.decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : this.decCases[Math.min(number % 10, 5)]
    }
    return this.titles[this.decCache[number]];
  }

}

class TpmModel {
  AnswerItemId: string;
  CheckListItemId: string;
}