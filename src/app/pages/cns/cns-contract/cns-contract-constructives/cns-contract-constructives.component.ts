import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NsiService } from '../../../../services/nsi.service';
import { CnsPartnerService, ContractConstructiveAdd, ContractConstructive } from '../../../../services/cns/cns-partner.service';
import { Nsi } from '../../../../services/models/models';

@Component({
  selector: 'app-cns-contract-constructives',
  templateUrl: './cns-contract-constructives.component.html',
  styleUrls: ['./cns-contract-constructives.component.css']
})
export class CnsContractConstructivesComponent implements OnInit {

  contractId: string;
  newConstructive: ContractConstructiveAdd = new ContractConstructiveAdd();
  cntConstructives: ContractConstructive[];
  selected: ContractConstructive;
  showAddDialogFlag: boolean = false;
  constructives: Promise<Nsi[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    private service: CnsPartnerService, private nsi: NsiService) {
    this.constructives = nsi.constructivesTree(true);
  }

  ngOnInit() {
    this.contractId = this.route.snapshot.paramMap.get('id');
    this.newConstructive.contractId = this.contractId;
    this.service.contractConstructives(this.contractId).subscribe(x => {
      this.cntConstructives = x;
    });

  }
  showEditDiialog() {
    this.newConstructive.constructiveId = this.selected.constructive.id;
    this.newConstructive.volume = this.selected.volume;
    this.showAddDialogFlag = true;
  }

  showAddDiialog() {
    this.showAddDialogFlag = true;
  }
  hideAddDialog() {
    this.showAddDialogFlag = false;
  }

  add() {
    this.service.addContractConstructive(this.newConstructive).subscribe(
      data => {
        {
          this.ngOnInit();
          this.hideAddDialog();
        }
      }
    );

  }
}
