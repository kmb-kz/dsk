import { Component, OnInit } from '@angular/core';
import { NsiService } from '../../../../../../services/nsi.service';
import { Nsi } from '../../../../../../services/models/models';
import { AreaComponentModel } from '../../AreaComponentModel';
import { AreaService } from '../../../../../../services/std/area.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Notifications } from '../../../../../../helpers/notification';

@Component({
  selector: 'app-areastandardchange',
  templateUrl: './areastandardchange.component.html',
  styleUrls: ['./areastandardchange.component.css']
})
export class AreastandardchangeComponent implements OnInit {
  standardType: number = 1;
  newStandard: any = {};
  standardId: number;
  otherStandard: any = {};
  standards: Promise<Nsi[]>;

  groups: Promise<Nsi[]>;
  constuctives: Promise<Nsi[]>;

  versionType: number = 1;
  newVersion: any = {};
  versionId: string;
  versions: Promise<Nsi[]>;
  constructor(public nsi: NsiService, public model: AreaComponentModel, private ntf: Notifications,
    private service: AreaService, private router: Router, private route: ActivatedRoute) {
    this.constuctives = nsi.constructives();
    this.groups = nsi.groups();
    this.constuctives.then(i => {
      this.otherStandard.constructiveId
      this.otherStandard.standardId = i
    })
  }

  ngOnInit() {
    this.model.Standard.then(i => {
      this.standardId = i.standardId;
      this.otherStandard.constructiveId = i.constructiveId;
      this.otherStandard.standardId = i.standardId;
      this.constuctives = this.nsi.constructives();
      this.constuctives.then(i => {
        this.standards = this.nsi.constractiveStandards(this.otherStandard.constructiveId);
      })
      this.initVersions();
    });
  }
  send() {
    var request: any = { areaStandardId: this.model.AreaStandardId };
    if (this.standardType == 1)
      request.standardId = this.standardId;
    else if (this.standardType == 2)
      request.standardId = this.otherStandard.standardId;
    else
      request.standard = this.newStandard;

    if (this.versionType == 1)
      request.versionId = this.versionId;
    else
      request.version = this.newVersion;

    this.ntf.default({ title: "Отправка запроса...", time: 2000 });
    this.service.change(request).subscribe(
      i => {
        this.ntf.default({ title: "Ваш запрос на замену стандарта отправлен" });
        this.model.Standard.then(i => i.changeRequestStatus = 'Ваш запрос на замену стандарта отправлен');
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      err => {
        this.ntf.default({ title: "Ошибка при отправке запроса...", time: 2000 });
      });
  }
  initVersions() {
    this.versionId = null;
    var standardId = this.standardType == 1 ? this.standardId : this.standardType == 2
      ? this.otherStandard.standardId : null;
    if (standardId)
      this.versions = this.nsi.standardVersions(standardId.toString());
    else
      this.versions = null;
  }
  refreshVersionType() {
    if (this.standardType == 3) {
      this.versionType = 2;
    }
    this.initVersions();
  }
  constructiveChange() {
    this.standards = null;
    if (this.otherStandard.constructiveId) {
      this.standards = this.nsi.constractiveStandards(this.otherStandard.constructiveId);
      this.standards.then(i => {
        if (i.length > 0)
          this.otherStandard.standardId = i[0].id;
        this.initVersions();
      })
    }

  }
  addParameter() {
    if (!this.newVersion.parameters)
      this.newVersion.parameters = [];
    this.newVersion.parameters.push({ type: {} });
  }
  deleteParameter(index: number) {
    this.newVersion.parameters.splice(index, 1);
  }
}
