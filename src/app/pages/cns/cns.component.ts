import { Component, OnInit } from '@angular/core';
import { CnsConstructiveService } from '../../services/cns/cns-constructive.service';
import { CnsVisitLogService } from '../../services/cns/cns-visit-log.service';
import { CnsEditVolumeService } from '../../services/cns/cns-edit-volume.service';
import { CnsPartnerService } from '../../services/cns/cns-partner.service';

@Component({
  selector: 'app-cns',
  templateUrl: './cns.component.html',
  styleUrls: ['./cns.component.css'],
  providers: [CnsEditVolumeService, CnsPartnerService, CnsVisitLogService, CnsConstructiveService]
})
export class CnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
