import { Component, OnInit, Input } from '@angular/core';
import { StandardService, Filter, Standard, StandardResponse } from '../../../../services/std/standard.service';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../../../../services/models/models';
import { NsiService } from '../../../../services/nsi.service';
import { AreaService, Area } from '../../../../services/std/area.service';
import { StandardComponentModel } from '../../standard/standard/StandardComponentModel';
import { environment } from '../../../../../environments/environment';
import { CnsConstructiveService, Stage } from '../../../../services/cns/cns-constructive.service';

@Component({
  moduleId: module.id,
  selector: 'app-standards',
  templateUrl: 'standards.component.html',
  styleUrls: ['standards.component.css']
})
export class Standards2Component implements OnInit {
  filter: Filter = new Filter();
  lastFilter: Filter = new Filter();
  standards: Promise<StandardResponse<Standard>>;
  constructives: Promise<Nsi[]>;
  areas: Promise<Area[]>;
  selectedId: string;

  @Input() inputFilter: Filter;
  @Input() visibleFilter: boolean = true;
  @Input() visibleTitle: boolean = true;

  constructor(private client: StandardService, private nsi: NsiService, private areaService: AreaService, private constructiveService: CnsConstructiveService) {
    this.constructives = nsi.constructivesTree();
    this.areas = areaService.areas('').toPromise();
  }

  ngOnInit() {
    this.search();

  }

  ngOnChanges() {
    this.filter = this.inputFilter;
    this.search();
  }
  search() {
    //alert(this.filter.constructiveId);
    this.lastFilter = Object.assign({}, this.filter);
    this.loadPage(1);
  }
  loadPage(page: number) {

    this.lastFilter.page = page;
    this.standards = this.client.filter(this.lastFilter).toPromise();
    this.standards.then(x => this.selectedId = x.results[0].id);
    this.standards.then(i => this.lastFilter.total = i.total);
  }


  loadVersion(id: string) {
    // this.standard.Version = this.client.version(id).toPromise();
  }

  select(id: string) {
    this.selectedId = id;
  }
  remove() {
    this.client.delete(this.selectedId).subscribe(x => {
      this.loadPage(1);
    });
  }
}
