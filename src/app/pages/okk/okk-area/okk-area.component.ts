import { Component, OnInit } from '@angular/core';
import { CnsAreaComponentModel } from '../../cns/cns-area/cns-area.component';
import { ActivatedRoute } from '@angular/router';
import { CnsAreaService } from '../../../services/cns/cns-area.service';

@Component({
  selector: 'app-okk-area',
  templateUrl: './okk-area.component.html',
  styleUrls: ['./okk-area.component.css'],
  providers: [CnsAreaComponentModel]
})
export class OkkAreaComponent implements OnInit {

  pathValue: string;
  constructor(public model: CnsAreaComponentModel, private route: ActivatedRoute,
    private service: CnsAreaService) {
  }

  ngOnInit() {
    this.pathValue = this.route.snapshot.url[0].path;
    this.model.Id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('cns-last-area-id', this.model.Id);
    this.model.Area = this.service.area(this.model.Id).toPromise();
    localStorage.setItem('pathValue', this.pathValue);
  }

}
