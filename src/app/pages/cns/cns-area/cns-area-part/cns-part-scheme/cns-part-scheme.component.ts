import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, SimpleChanges, HostListener } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { CnsScheme, CnsPoint, CnsAreaService } from '../../../../../services/cns/cns-area.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { NsiService } from '../../../../../services/nsi.service';
import { CnsAreaComponentModel } from '../../cns-area.component';
import { ActivatedRoute, Router } from '@angular/router';
export class CnsPartSchemeComponentModel {
  SelectedPoint: CnsPoint;
  PointId: string;
  Scheme: Promise<CnsScheme>;
  Id: string;
  Points: CnsPoint[];
}
@Component({
  selector: 'app-cns-part-scheme',
  templateUrl: './cns-part-scheme.component.html',
  styleUrls: ['./cns-part-scheme.component.css'],
  providers: [CnsPartSchemeComponentModel]
})
export class CnsPartSchemeComponent implements OnInit {
  constructor(public model: CnsPartSchemeComponentModel, public areaModel: CnsAreaComponentModel,
    private route: ActivatedRoute, private router: Router, private service: CnsAreaService) {

  }
  ngOnInit(): void {
    this.model.Id = this.route.snapshot.paramMap.get('id');
    this.model.Scheme = this.service.scheme(this.model.Id).toPromise();
  }

}
