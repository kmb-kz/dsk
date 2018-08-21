import { Component, OnInit } from '@angular/core';
import { Filter, StandardResponse, StandardService } from '../../../services/std/standard.service';

import { NsiService } from '../../../services/nsi.service';
import { AreaService, VersionRequest } from '../../../services/std/area.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  filter: Filter = new Filter();
  lastFilter: Filter = new Filter();
  requests: Promise<StandardResponse<VersionRequest>>;
  
  constructor(private client: AreaService, private nsi: NsiService) {
   
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
    this.requests = this.client.versionRequests(this.lastFilter).toPromise();
    this.requests.then(i => this.lastFilter.total = i.total);
  }
}
