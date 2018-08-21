import { Component, OnInit } from '@angular/core';
import { CnsPart, CnsAreaService } from '../../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../../../cns/cns-area/cns-area.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-child',
  templateUrl: './location-child.component.html',
  styleUrls: ['./location-child.component.css']
})
export class LocationChildComponent implements OnInit {

  part: Promise<CnsPart>;
  breadcrumbs: CnsPart[] = [];
  constructor(public model: CnsAreaComponentModel, private router: Router, private route: ActivatedRoute,
    private service: CnsAreaService) {
    this.route.params.forEach(params => {
      this.model.PartId = params['id'];
      this.part = this.service.part(this.model.PartId).toPromise();
      this.service.breadcrumbs(this.model.PartId).subscribe(i=>{
        this.breadcrumbs = i;
      });
    });
  }

  ngOnInit() {
  }

}
