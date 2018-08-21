import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CnsAreaService } from '../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../../cns/cns-area/cns-area.component';

@Component({
  selector: 'app-location-childs',
  templateUrl: './location-childs.component.html',
  styleUrls: ['./location-childs.component.css'],
  providers: [CnsAreaComponentModel]
})
export class LocationChildsComponent implements OnInit {

  constructor(public model: CnsAreaComponentModel, private route: ActivatedRoute,
    private service: CnsAreaService) {
  }

  ngOnInit() {
    this.model.Id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('rpm-last-area-id', this.model.Id);
    this.model.Area = this.service.area(this.model.Id).toPromise();
  }

}
