import { Component, OnInit } from '@angular/core';
import { VersionService, VersionFilter, VersionResponse, VersionResponseModel } from '../../../../services/std/version.service';
import { NsiService } from '../../../../services/nsi.service';
import { Nsi } from '../../../../services/models/models';

@Component({
  selector: 'app-standardversions',
  templateUrl: './standardversions.component.html',
  styleUrls: ['./standardversions.component.css']
})
export class StandardversionsComponent implements OnInit {

  filter: VersionFilter = new VersionFilter();
  lastFilter: VersionFilter = new VersionFilter();
  versions: VersionResponseModel[] = [];
  constructives: Promise<Nsi[]>;
  constructor(private client: VersionService, private nsi: NsiService) {
    this.constructives = nsi.constructives();
  }

  ngOnInit() {
    this.search();
  }
  search() {
    this.lastFilter = this.filter;
    this.loadPage(1);

  }
  loadPage(page: number) {
    this.lastFilter.page = page;
    console.log(this.lastFilter);
    this.client.filter(this.lastFilter).subscribe(i => {
      this.versions = i.results;
      this.lastFilter.total = i.total;
    });
  }

}
