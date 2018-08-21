import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarSettings } from '../../../../CalendarSettings';
import { Calendar } from 'primeng/primeng';
import { Decline, RpmRemarkService, DateCorrectedModel, CheckListCorrectedModel, Remarks } from '../../../../services/rpm/rpm-remark.service';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { File64 } from '../../../common/file/file.component';
import { AdUserInfo } from '../../../../services/models/AdUserInfo';
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


@Component({
  moduleId: module.id,
  selector: 'app-rpm-remark-checklist',
  templateUrl: 'rpm-remark-checklist.component.html',
  styleUrls: ['rpm-remark-checklist.component.css'],
  providers: [RpmRemarkChecklistComponentModel]
})
export class RpmRemarkChecklistComponent implements OnInit {


  @Input() areaId: string;
  @Input() answerListId: string;
  @Input() areaPartId: string = null;
  @Input() remarks: Remarks = new Remarks();
  remarkInfo: Remarks = new Remarks();
  redirectUserName: string;
  breakdownList: any[];
  constructor(private route: ActivatedRoute, private model: RpmRemarkChecklistComponentModel,
    private service: RpmRemarkService, private toaster: ToasterComponent) {
  }

  ngOnInit() {
    this.model.Id = this.areaId;
    this.getBreakdown();
    this.getRemarks();

  }

  getBreakdown() {
    this.service.getBreakdown().subscribe(
      data => {
        if (data.success) {
          this.breakdownList = data.result;
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  getRemarks() {
    this.service.getRemarksList(this.areaId, this.areaPartId).subscribe(
      data => {
        if (data.success) {
          this.remarkInfo = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  onSelectedUser(user: AdUserInfo) {
    this.redirectUserName = user.accountName;
  }
}

export class DoneCheckListModel {
  answerItemId: string;
  files: File64[];
  comment: string;
}

class FormAcceptWorkModel {
  rangeDates: Date[];
  commentAcceptWork: string;
}

