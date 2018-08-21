import { Component, OnInit } from '@angular/core';
import { StandardService, Filter, Standard, StandardResponse } from '../../../../services/std/standard.service';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../../../../services/models/models';
import { NsiService } from '../../../../services/nsi.service';
import { AreaService, Area } from '../../../../services/std/area.service';

@Component({
  moduleId: module.id,
  selector: 'app-standards-table',
  templateUrl: 'standards.component.html',
  styleUrls: ['standards.component.css']
})
export class StandardsComponent implements OnInit {
  filter: Filter = new Filter();
  lastFilter: Filter = new Filter();
  standards: Promise<StandardResponse<Standard>>;
  constructives: Promise<Nsi[]>;
  areas: Promise<Area[]>;
  constructor(private client: StandardService, public nsi: NsiService, private areaService: AreaService) {
    this.constructives = nsi.constructives();
    this.areas = areaService.areas('').toPromise();
  }

  ngOnInit() {
    this.search();
  }
  search() {
    this.lastFilter = Object.assign({}, this.filter);
    this.loadPage(1);
  }
  loadPage(page: number) {
    this.lastFilter.page = page;
    this.standards = this.client.filter(this.lastFilter).toPromise();
    this.standards.then(i => this.lastFilter.total = i.total);
  }
}
