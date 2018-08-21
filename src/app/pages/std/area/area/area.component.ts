import { Component, OnInit } from '@angular/core';
import { AreaComponentModel } from './AreaComponentModel';
import { AreaService } from '../../../../services/std/area.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AreaComponentModel]
})
export class AreaComponent implements OnInit {
  constructor(public model: AreaComponentModel, private service: AreaService,
    public auth:AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.model.AreaId = this.route.snapshot.paramMap.get('id');
    this.model.Model = this.service.area(this.model.AreaId).toPromise();
  }

}