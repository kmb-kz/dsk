import { Component, OnInit } from '@angular/core';
import { Remarks, RpmRemarkService } from '../../../../../services/rpm/rpm-remark.service';
import { ActivatedRoute } from '@angular/router';
import { DateHelpers } from '../../../../../helpers/date-helpers';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-remark-info',
  templateUrl: './remark-info.component.html',
  styleUrls: ['./remark-info.component.css']
})
export class RemarkInfoComponent implements OnInit {
  item: any;
  remarkId: string;
  dateListTmp = [];
  dateList: any[] = [];
  dateDiff: any[] = [];
  constructor(private service: RpmRemarkService, private dd: DateHelpers, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.remarkId = this.route.snapshot.paramMap.get('id');
    this.load();
  }
  onPressBack() {
    this.location.back();
  }
  load() {
    this.service.getRemarkItem(this.remarkId).subscribe(x => {
      this.item = x;
      for (let i = 0; i < this.item.answers.length; i++) {
        this.dateListTmp.push(this.item.answers[i].dateCreated);
      }

      for (let i = 0; i < Object.keys(this.dateListTmp).length; i++) {
        if (Object.keys(this.dateListTmp).length > i + 1) {
          this.dateDiff.push(this.dd.getDateDiff(this.dateListTmp[i], this.dateListTmp[i + 1]));
        }
      }
      console.log(this.item);
    });
  }


  refresh() {
    this.load();
  }
}
