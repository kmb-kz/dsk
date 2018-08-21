import { Component, OnInit } from '@angular/core';
import { TemplateService, TemplateResponseModel } from '../../../../services/std/template.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standardtemplatedetails',
  templateUrl: './standardtemplatedetails.component.html',
  styleUrls: ['./standardtemplatedetails.component.css']
})
export class StandardtemplatedetailsComponent implements OnInit {
  template: Promise<TemplateResponseModel>;
  constructor(private service: TemplateService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.template = this.service.get(id).toPromise();
  }

}
