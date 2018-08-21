import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx'
import { NsiService } from '../../../services/nsi.service';
import { Nsi } from '../../../services/models/models';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';
import { CnsStatsService } from '../../../services/cns/cns-stats.service';
export class CnsStatsComponentModel {
  AreaId: BehaviorSubject<string>;
}
@Component({
  selector: 'app-cns-stats',
  templateUrl: './cns-stats.component.html',
  styleUrls: ['./cns-stats.component.css'],
  providers: [CnsStatsComponentModel, CnsStatsService]
})
export class CnsStatsComponent implements OnInit {
  areas: Promise<CnsArea[]>;
  areaId = '';
  constructor(private service: CnsAreaService, private model: CnsStatsComponentModel) { 
    model.AreaId = new BehaviorSubject<string>(null);
  }

  ngOnInit() {
    this.areas = this.service.areas().toPromise();
  }
  areaSelected() {
    this.model.AreaId.next(this.areaId);
  }
}
