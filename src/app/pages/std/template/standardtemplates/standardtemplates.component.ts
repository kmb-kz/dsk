import { Component, OnInit } from '@angular/core';
import { TemplateService, TemplateFilter, TemplateResponseModel } from '../../../../services/std/template.service';

@Component({
  selector: 'app-standardtemplates',
  templateUrl: './standardtemplates.component.html',
  styleUrls: ['./standardtemplates.component.css']
})
export class StandardtemplatesComponent implements OnInit {
 
  filter = new TemplateFilter();
  lastFilter = new TemplateFilter();
  templates : TemplateResponseModel[] = [];;
  constructor(private client: TemplateService) {
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
    this.client.filter(this.lastFilter).subscribe(i => {
      this.templates = i.results;
      this.lastFilter.total = i.total;
    });
  }

}
