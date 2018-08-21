import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CnsPoint } from '../../../../../../../services/cns/cns-area.service';
import { NsiService } from '../../../../../../../services/nsi.service';
import { CnsAreaComponentModel } from '../../../../cns-area.component';
import { Nsi } from '../../../../../../../services/models/models';

@Component({
  selector: 'app-cns-scheme-panel-new-point',
  templateUrl: './cns-scheme-panel-new-point.component.html',
  styleUrls: ['./cns-scheme-panel-new-point.component.css']
})
export class CnsSchemePanelNewPointComponent implements OnInit {
  @Input() newPoint: any;
  @Output() init = new EventEmitter();
  @Output() close = new EventEmitter();

  hasError: boolean;
  partners: Promise<Nsi[]>;
  contracts: Promise<Nsi[]>;
  constructives: Promise<Nsi[]>;
  constructor(private model: CnsAreaComponentModel, private nsi: NsiService) {
  }

  ngOnInit() {
    this.partners = this.nsi.arepartPartners(this.model.PartId);
    this.partners.then(i => {
      if (i && i.length > 0) {
        this.newPoint.partnerId = i[0].id;
        this.onPartnerChange();
      }
    })
  }
  okClick() {
    if (this.newPoint.constructiveId && this.newPoint.partnerId && this.newPoint.constructiveId) {
      this.init.emit();
    } else {
      this.hasError = true;
    }
  }
  closeClick() {
    this.close.emit();
  }
  onPartnerChange() {
    this.contracts = null;
    this.newPoint.contractId = null;
    if (this.newPoint.partnerId) {
      this.contracts = this.nsi.contracts(this.newPoint.partnerId, this.model.PartId);
      this.contracts.then(i => {
        if (i && i.length > 0) {
          this.newPoint.contractId = i[0].id;
          this.onContractChange();
        }
      })
    }
  }
  onContractChange() {
    this.constructives = null;
    this.newPoint.constructiveId = null;
    if (this.newPoint.contractId) {
      this.constructives = this.nsi.contractConstructives(this.newPoint.contractId);
      this.constructives.then(i => {
        if (i && i.length > 0) {
          this.newPoint.constructiveId = i[0].id;
        }
      })
    }
  }
}
