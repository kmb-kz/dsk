import { Component, OnInit } from '@angular/core';
import { StandardAdd, StandardService } from '../../../../services/std/standard.service';
import { Nsi } from '../../../../services/models/models';
import { Router } from '@angular/router';
import { NsiService } from '../../../../services/nsi.service';
import { File64 } from '../../../common/file/file.component';
import { Notifications } from '../../../../helpers/notification';
import { ToasterService } from 'angular2-toaster';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { Calendar } from '../../../ppo/checklistfdetail/checklistfdetail.component';
import { CalendarSettings } from '../../../../CalendarSettings';

@Component({
  moduleId: module.id,
  selector: 'app-standardedit',
  templateUrl: 'standardedit.component.html',
  styleUrls: ['standardedit.component.css']
})
export class StandardeditComponent implements OnInit {
  standard: StandardAdd;
  modelState: any = {};
  constructives: Promise<any[]>;
  groups: Promise<Nsi[]>;
  regulations: Promise<Nsi[]>;
  classes: Promise<Nsi[]>;
  parameterTypes: Promise<Nsi[]>;
  calendar: Calendar;

  constructor(private service: StandardService, private route: Router, private nsi: NsiService,
    private ntf: Notifications) {
    this.standard = new StandardAdd();
    this.constructives = nsi.constructivesTree();
    this.groups = nsi.groups();
    this.classes = nsi.classes();
    this.parameterTypes = nsi.stdParameterTypes();
    this.regulations = nsi.regulations();
    this.calendar = <Calendar>{};
    this.calendar.rus = CalendarSettings.ru;
  }

  ngOnInit() {
  }
  save() {
    this.ntf.default({ title: "Отправка запроса...", time: 800 });
    this.service.save(this.standard).subscribe(
      i => {
        this.ntf.success({ title: "Стандарт сохранен! Вы будете перенаправлены на страницу -  Корпоративные стандарты" });
        this.route.navigate(['/std/standard/standards2']);
      },
      err => {
        this.modelState = JSON.parse(err.error).modelState;
        this.ntf.error({ title: "Отправка запроса", text: "Стандарт не сохранен", time: 2000 });
      }
    );
  }
  addParameter() {
    this.standard.parameters.push({});
  }
  deleteParameter(index: number) {
    this.standard.parameters.splice(index, 1);
  }

}
