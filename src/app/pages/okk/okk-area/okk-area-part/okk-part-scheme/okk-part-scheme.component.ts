import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsAreaService } from '../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../../cns/cns-area/cns-area.component';
import { CnsPartSchemeComponentModel } from '../../../../cns/cns-area/cns-area-part/cns-part-scheme/cns-part-scheme.component';

@Component({
  selector: 'app-okk-part-scheme',
  templateUrl: './okk-part-scheme.component.html',
  styleUrls: ['./okk-part-scheme.component.css'],
  providers: [CnsPartSchemeComponentModel]
})
export class OkkPartSchemeComponent implements OnInit {

  constructor(public model: CnsPartSchemeComponentModel, public areaModel: CnsAreaComponentModel,
    private route: ActivatedRoute, private router: Router, private service: CnsAreaService) {

  }
  ngOnInit(): void {
    this.model.Id = this.route.snapshot.paramMap.get('id');
    this.model.Scheme = this.service.scheme(this.model.Id).toPromise();
  }

}
