import { Component, OnInit } from '@angular/core';
import { CnsVisitLogService } from '../../../../../../../services/cns/cns-visit-log.service';
import { CnsAreaComponentModel } from '../../../../cns-area.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cns-accounting-cert',
  templateUrl: './cns-accounting-cert.component.html',
  styleUrls: ['./cns-accounting-cert.component.css']
})
export class CnsAccountingCertComponent implements OnInit {
  constructor(public model: CnsAreaComponentModel, private service: CnsVisitLogService) { }
  ngOnInit() {
  }
}
