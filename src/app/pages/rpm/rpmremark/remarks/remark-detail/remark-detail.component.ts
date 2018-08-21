import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../../services/common/auth.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Calendar } from 'primeng/components/calendar/calendar';
import { RemarkAnswerAddViewModel, RpmRemarkService } from '../../../../../services/rpm/rpm-remark.service';
import { ToasterComponent } from '../../../../../components/toaster/toaster.component';
import { AdUserInfo } from '../../../../../services/models/AdUserInfo';
declare var jQuery: any;
import * as moment from 'moment';
import { DateHelpers } from '../../../../../helpers/date-helpers';

@Component({
  selector: 'app-remark-detail',
  templateUrl: './remark-detail.component.html',
  styleUrls: ['./remark-detail.component.css']
})

export class RemarkDetailComponent implements OnInit {

  @Input() item: any;
  @Input() answerListId: string;
  @Input() dateDiff: any;
  //@Output() refresh = new EventEmitter();

  itemId: string;

  constructor(public auth: AuthService, private route: ActivatedRoute, private dd: DateHelpers,
    private service: RpmRemarkService, private toaster: ToasterComponent) {

  }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    //console.log(this.item);
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

  diffDate(date1, date2) {
    var a = moment(date1, 'YYYY.mm.dd HH:mm:ss');
    var b = moment(date2, 'YYYY.mm.dd HH:mm:ss');

    return b.diff(a, 'days');
  }

}
class FormAcceptWorkModel {
  rangeDates: Date[];
  commentAcceptWork: string;
}
