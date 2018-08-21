import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsAreaService, CnsPart } from '../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../cns-area.component';

@Component({
  selector: 'app-cns-area-part',
  templateUrl: './cns-area-part.component.html',
  styleUrls: ['./cns-area-part.component.css']
})
export class CnsAreaPartComponent implements OnInit {
  part: Promise<CnsPart>;
  breadcrumbs: CnsPart[] = [];
  constructor(public model: CnsAreaComponentModel, private router: Router, private route: ActivatedRoute,
    private service: CnsAreaService) {
    this.route.params.forEach(params => {
      this.model.PartId = params['id'];
      this.part = this.service.part(this.model.PartId).toPromise();
      this.service.breadcrumbs(this.model.PartId).subscribe(i => {
        this.breadcrumbs = i;
      });
    });
  }

  ngOnInit() {
  }

}
