import { Component, OnInit } from '@angular/core';
import { CnsAreaComponentModel } from '../../../cns-area.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsPartnerService, Contract } from '../../../../../../services/cns/cns-partner.service';
import { NsiService } from '../../../../../../services/nsi.service';
import { AuthService } from '../../../../../../services/common/auth.service';

@Component({
  selector: 'app-cns-partners-accounting',
  templateUrl: './cns-partners-accounting.component.html',
  styleUrls: ['./cns-partners-accounting.component.css']
})
export class CnsPartnersAccountingComponent implements OnInit {

  contracts: Contract[] = [];
  contract: Contract;
  contractId: string;

  constructor(public auth: AuthService, private route: ActivatedRoute, private router: Router,
    private partnerService: CnsPartnerService, private nsi: NsiService,
    public model: CnsAreaComponentModel) {
      
  }


  ngOnInit() {
    this.model.Partner.id = this.route.snapshot.paramMap.get('id');
    this.loadPartner();
    this.loadContracts();
  }

  loadPartner() {
    this.partnerService.partner(this.model.Partner.id).subscribe(data => {
      if (data.success == true) {
        if (data.result.length > 0) {
          this.model.Partner = data.result[0];
        }
      }

    });
  }

  loadContracts() {
    this.partnerService.contractsByAreaPart(this.model.Partner.id, this.model.PartId).subscribe(
      data => {
        this.contracts = data.result;
        this.contractId = data.result[0].id;
        if(data.result[0].constructive)
          this.model.ConstructiveId.next(data.result[0].constructive.id);
        this.model.ContractId.next(data.result[0].id);
      }
    );
  }

  changeContract() {
    console.info(this.contractId);
    this.contracts.forEach(obj => {
      if (this.contractId == obj.id) {
        if(obj.constructive)
          this.model.ConstructiveId.next(obj.constructive.id);
        this.model.ContractId.next(obj.id);
      }
    });
  }

}
