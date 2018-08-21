import { Component, OnInit } from '@angular/core';
import { Nsi } from '../../../services/models/models';
import { Area, AreaService } from '../../../services/std/area.service';
import { CnsPartnerService, Contract, ContractAdd, Partner } from '../../../services/cns/cns-partner.service';
import { NsiService } from '../../../services/nsi.service';
import { Contracts } from '../../../services/models/objects/objectsDetailModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';

@Component({
  selector: 'app-cns-contract',
  templateUrl: './cns-contract.component.html',
  styleUrls: ['./cns-contract.component.css']
})
export class CnsContractComponent implements OnInit {

  id: string;
  areaId: string;
  areaPartId: string;
  constructiveId: string;

  constructives: Promise<Nsi[]>;
  areas: Promise<CnsArea[]>;
  partner: Partner[];
  contracts: Contract[];
  newContract: ContractAdd = new ContractAdd();
  selected: Contract;
  showAddDialogFlag: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private service: CnsPartnerService, private nsi: NsiService, private area: CnsAreaService) {
    this.areas = area.areasTree().toPromise();
    this.constructives = nsi.constructivesTree(true);
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.partner(this.id).subscribe(x => {
      this.partner = x.result;
    });
    this.newContract.partnerId = this.id;
    this.service.contracts(this.id).subscribe(
      data => {
        this.contracts = data.result;
      }
    );
  }
  showAddDialog() {
    this.showAddDialogFlag = true;
  }
  showEditDialog() {
    this.showAddDialogFlag = true;
    this.newContract.id = this.selected.id;
    this.newContract.areaPartId = this.selected.areaPartId;
    this.newContract.dateFinish = this.selected.dateFinish;
    this.newContract.dateStart = this.selected.dateStart;
    this.newContract.number = this.selected.number;
    this.newContract.price = this.selected.price;
    this.newContract.volume = this.selected.volume;
    this.newContract.descr = this.selected.descr;
  }
  hideAddDialog() {
    this.showAddDialogFlag = false;
  }
  add() {
    if (!this.newContract.id) {
      this.service.addContract(this.newContract).subscribe(
        data => {
          if (data.success) {
            this.ngOnInit();
            this.hideAddDialog();
          }
        }
      );
    } else {
      this.service.editContract(this.newContract).subscribe(
        data => {
          this.ngOnInit();
          this.hideAddDialog();
        }
      );
    }

  }

  dialogFlagStages: boolean = false;
  showDialogStages(show: boolean) {
    this.dialogFlagStages = show;
  }

}
