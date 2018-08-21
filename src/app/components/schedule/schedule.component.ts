import { Component, OnInit } from '@angular/core';
import { ScheduleService, SendEventDate } from '../../services/ppo/schedule.service';
import { ToasterComponent } from '../toaster/toaster.component';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
  providers: [DatePipe]
})
export class ScheduleComponent implements OnInit {


  events: any[];
  header: any;
  model: SendEventDate;

  constructor(private service: ScheduleService, private toaster: ToasterComponent, private datePipe: DatePipe) { }

  ngOnInit() {
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  loadEvents(event) {
    let start = moment(event.view.start).format('YYYY-MM-DD');
    let end = moment(event.view.end).format('YYYY-MM-DD');
    this.model = {
      'start': start,
      'end': end
    }

    this.service.getEventList(start, end).subscribe(
      data => {
        if (data.success) {
          this.events = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', 'Ошибка');
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
}
