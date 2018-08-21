import { Component, OnInit, Input } from '@angular/core';
import { CnsPart } from '../../../../services/cns/cns-area.service';
import { ActivatedRoute } from '@angular/router';
import { OkkStandardService, Constructives, Stages, Standards, Stages2 } from '../../../../services/okk/okk-standard.service';
import { OkkAnswerService, PausePart } from '../../../../services/okk/okk-answer.service';
import { CalendarSettings } from '../../../../CalendarSettings';
import { Calendar } from '../../../ppo/checklistfdetail/checklistfdetail.component';
import { SelectedParent } from '../../../../services/models/ppo/fixCL/selected-parent.model';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
declare var jQuery: any;
@Component({
  selector: 'app-okk-part-rooms',
  templateUrl: './okk-part-rooms.component.html',
  styleUrls: ['./okk-part-rooms.component.css']
})
export class OkkPartRoomsComponent implements OnInit {

  @Input() rooms: CnsPart[] = [];
  @Input() stages: Stages2[] = [];
  @Input() apartment: string;
  areaId: string;
  constructives: Constructives[] = [];
  stageId: string;
  standards: Standards[] = [];
  areaPartId: string;
  selectRoomName = '';
  roomId: string;
  roomPause: PausePart;
  calendars: Calendar;
  areaPartPauseModel: PausePart = new PausePart();
  areaPartPauseInfo: PausePart[] = [];
  isPauseRoom: boolean = false;
  isFinishStagesStatus: boolean = false;
  selectConstructiveId: string;


  constructor(private route: ActivatedRoute,
    private service: OkkStandardService, private answerService: OkkAnswerService,
    private toaster: ToasterComponent) {
    this.areaId = localStorage.getItem('cns-last-area-id');


  }

  ngOnInit() {
    this.areaPartPauseInfo = [];
    this.stageId = '0';
    this.selectRoomName = '';
    this.initCalendar();
    //this.selectRoomName = localStorage.getItem('selectedRoomName');
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

  checking(event) {
    this.selectedInfo(this.selectConstructiveId, 0);
  }

  selectedInfo(constructiveId: string, indexId: number) {
    this.selectConstructiveId = constructiveId;
    this.standards = [];

    if (this.areaPartId !== undefined) {
      this.service.getAreaStandards(this.areaId, this.areaPartId, constructiveId, this.stageId).subscribe(i => {
        this.standards = i;
      });
    } else {
      this.toaster.popToast('info', 'Внимание!', 'Вы не выбрали комнату!!!');
    }

  }

  saveRoomId(roomId: string, partName: string) {
    localStorage.setItem('roomId', roomId);
    localStorage.setItem('selectedRoomName', partName);
    this.roomId = localStorage.getItem('roomId');
    this.areaPartId = localStorage.getItem('roomId');
    this.selectRoomName = localStorage.getItem('selectedRoomName');
    this.selectedInfo(this.constructives[0].id, 0);
    this.getInfoPartPause(roomId);
  }

  areaPartPause() {
    this.roomId = localStorage.getItem('roomId');
  }

  getInfoPartPause(roomId: string) {
    this.isPauseRoom = false;
    this.answerService.getInfoPartPause(roomId).subscribe(
      i => {
        if (i.success) {
          if (i.result != null) {
            this.areaPartPause = i.result;
            this.isPauseRoom = true;
          }
        }
      });

    //this.isPauseRoom = this.isObjectEmpty(this.areaPartPause);
  }


  stageIdChange() {
    this.standards = [];
    //localStorage.removeItem('roomId');
    //localStorage.removeItem('selectedRoomName');
    this.answerService.checkFinishedStage(this.apartment, this.stageId).subscribe(
      i => {

        this.service.getAreaConstructives(this.areaId, this.stageId)
          .subscribe(d => {
            this.constructives = d;
            if (d == null) {
              this.toaster.popToast('info', 'Внимание!', 'На этом этапе нет конструктивов');
            }
          });
        this.isFinishStagesStatus = i;

      });
  }

  finishStage() {
    this.isFinishStagesStatus = true;
    this.answerService.isFinishStage(this.apartment, this.stageId).subscribe(
      i => {
        if (i.success) {
          this.isFinishStagesStatus = true;
        } else {
          this.isFinishStagesStatus = false;
          this.toaster.popToast('error', 'Ошибка!', i.message);
        }
      },
      error => {
        console.log(error);
        this.toaster.popToast('error', 'Ошибка!', 'Ошибка на стороне сервера!!!');
        this.isFinishStagesStatus = false;
      }

    );
  }

  savePartPause() {
    this.areaPartPauseModel.areaPartid = localStorage.getItem('roomId');
    this.areaPartPauseModel.removedPause = false;
    this.answerService.setAreaPartPause(this.areaPartPauseModel).subscribe(i => {
      if (i) {
        this.getInfoPartPause(this.areaPartId);
        jQuery('#modal-dialog-pausePart').modal('hide');
        this.areaPartPauseModel = new PausePart();
      }
    });
  }

  removePauseAreaPart() {
    this.areaPartPauseModel.areaPartid = this.areaPartId;
    this.areaPartPauseModel.removedPause = true;
    this.answerService.setAreaPartPause(this.areaPartPauseModel).subscribe(i => {
      if (i) {
        console.log(i);
        this.getInfoPartPause(this.areaPartId);
        this.areaPartPauseModel = new PausePart();
      }
    });
  }



}
