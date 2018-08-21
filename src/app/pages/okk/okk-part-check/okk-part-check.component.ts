import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OkkPart, OkkAreaService } from '../../../services/okk/okk-area.service';
import { CnsAreaService, CnsScheme, CnsPart } from '../../../services/cns/cns-area.service';
import { Nsi } from '../../../services/models/models';
import { OkkStandardService, Stages } from '../../../services/okk/okk-standard.service';

import { CalendarSettings } from '../../../CalendarSettings';
import { Calendar } from '../../ppo/checklistfdetail/checklistfdetail.component';
import { PausePart, OkkAnswerService } from '../../../services/okk/okk-answer.service';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
declare var jQuery: any;
@Component({
  selector: 'app-okk-part-check',
  templateUrl: './okk-part-check.component.html',
  styleUrls: ['./okk-part-check.component.css']
})
export class OkkPartCheckComponent implements OnInit {

  apartmentId: string;
  entranceId: string;
  entrances: CnsPart[] = [];
  apartments: OkkPart[] = [];
  rooms: CnsPart[] = [];
  areaId: string;
  areaPartId: string;
  schemes: Promise<CnsScheme[]>;
  issetScheme: number;
  stages: Stages[] = [];
  calendars: Calendar;
  areaPartPauseModel: PausePart = new PausePart();
  isPauseApartment: boolean = false;
  constructor(private route: ActivatedRoute,
    private service: CnsAreaService, private serviceOkkStandard: OkkStandardService,
    private serviceArea: OkkAreaService,
    private answerService: OkkAnswerService, private toaster: ToasterComponent) { }

  ngOnInit() {
    this.areaPartId = this.route.snapshot.paramMap.get('areaID');
    this.areaId = localStorage.getItem('cns-last-area-id');
    this.serviceArea.areaParts(this.areaId, 4).subscribe(i => {
      this.apartments = i;
    });
    // this.service.areaParts(this.areaId, this.areaPartId).subscribe(i => {
    //   this.entrances = i;
    // });
    this.initCalendar();
  }

  initCalendar() {
    let today = new Date();
    let nextMonth = (today.getMonth() === 11) ? 0 : today.getMonth() + 1;
    let nextYear = ((today.getMonth() === 11))
      ? today.getFullYear() + 1 : today.getFullYear();
    this.calendars = <Calendar>{};
    this.calendars.rus = CalendarSettings.ru;
    this.calendars.minDate = new Date();
    this.calendars.minDate.setMonth(today.getMonth());
    this.calendars.minDate.setFullYear(today.getFullYear());
    this.calendars.maxDate = new Date();
    this.calendars.maxDate.setMonth(nextMonth);
    this.calendars.maxDate.setFullYear(nextYear);
  }

  // entranceIdChange() {
  //   this.service.areaParts(this.areaId, this.entranceId).subscribe(i => {
  //     this.apartments = i;
  //   });
  // }

  getInfoPartPause(roomId: string) {
    this.isPauseApartment = false;
    this.answerService.getInfoPartPause(roomId).subscribe(
      i => {
        if (i.success) {
          if (i.result != null) {
            //this.areaPartPause = i.result;
            this.isPauseApartment = true;
          }
        }
      });


  }

  saveApartmentsPause() {
    this.areaPartPauseModel.areaPartid = this.apartmentId; /* localStorage.getItem('roomId');*/
    this.answerService.setAreaPartPause(this.areaPartPauseModel).subscribe(i => {
      if (i) {
        this.getInfoPartPause(this.areaPartId);
        jQuery('#modal-dialog-pausePartRoom').modal('hide');
        this.areaPartPauseModel = new PausePart();
      }
    });
  }


  finishedApartment() {
    this.answerService.finishApartment(this.areaPartId).subscribe(
      i => {
        if (i.success) {

        } else {
          this.toaster.popToast('error', 'Внимание!', i.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  apartmentIdChange() {
    this.schemes = this.service.partSchemes(this.apartmentId).toPromise();
    this.service.areaParts(this.areaId, this.apartmentId).subscribe(i => {
      this.rooms = i;
      if (this.rooms.length > 0) {
        this.stages = [];
        this.serviceOkkStandard.getAreaStages(this.areaId).subscribe(i => {
          this.stages = i;
        });
      } else {
        this.toaster.popToast('info', 'Внимание!', 'Вы не добавили комнаты!!!');
        this.stages = [];
      }
    });
    localStorage.removeItem('roomId');
    localStorage.removeItem('selectedRoomName');
  }









}
