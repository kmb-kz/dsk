import { Component, OnInit } from '@angular/core';
import { AreaComponentModel } from '../AreaComponentModel';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../../../../services/std/area.service';
import { Notifications } from '../../../../../helpers/notification';

@Component({
  selector: 'app-areastandard',
  templateUrl: './areastandard.component.html',
  styleUrls: ['./areastandard.component.css']
})
export class AreastandardComponent implements OnInit {

  constructor(public model: AreaComponentModel, private route: ActivatedRoute,
    private service: AreaService, private notify: Notifications) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    if (!this.model.Standard || this.model.AreaStandardId !== id) {
      this.model.AreaStandardId = id;
      this.model.Standard = this.service.standard(this.model.AreaStandardId).toPromise();
    }
  }

}
