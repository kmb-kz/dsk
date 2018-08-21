import { Component, OnInit } from '@angular/core';
import { CnsPartnerService, Partner } from '../../../services/cns/cns-partner.service';
import { Nsi } from '../../../services/models/models';
import { NsiService } from '../../../services/nsi.service';
import { AreaService, Area } from '../../../services/std/area.service';

@Component({
  selector: 'app-cns-partner',
  templateUrl: './cns-partner.component.html',
  styleUrls: ['./cns-partner.component.css']
})
export class CnsPartnerComponent implements OnInit {

  partners: Partner[];
  selected: Partner;
  newPartner: Partner = new Partner();


  showAddDialogFlag: boolean = false;
  showRemoveDialogFlag: boolean = false;
  constructives: Promise<Nsi[]>;
  areas: Promise<Area[]>;

  constructor(private service: CnsPartnerService, private nsi: NsiService, private area: AreaService) {

  }

  ngOnInit() {
    this.service.partners().subscribe(
      data => {
        this.partners = data.result;
      }
    );
  }

  showEditDialog() {
    this.showAddDialogFlag = true;
    this.newPartner = this.selected;
  }
  showAddDialog() {
    this.showAddDialogFlag = true;
  }
  showRemoveDialog() {
    this.showRemoveDialogFlag = true;
    this.newPartner = this.selected;
  }
  hideRemoveDialog() {
    this.showRemoveDialogFlag = false;
  }

  hideAddDialog() {
    this.showAddDialogFlag = false;
  }
  search() {
    this.service.searchFromPortal(this.newPartner.bin).subscribe(x => {
      this.newPartner.name = x.response.name;
    });
  }

  remove() {
    if (this.newPartner.id) {
      this.service.remove(this.newPartner).subscribe(
        i => {
          if (i.success) {
            this.hideRemoveDialog();
            this.ngOnInit();
            this.selected = null;
          }
        }
      );
    }
  }

  add() {
    if (!this.newPartner.id) {
      this.service.add(this.newPartner).subscribe(
        data => {
          if (data.success) {
            this.hideAddDialog();
            this.ngOnInit();
          }
        }
      );
    } else {
      this.service.edit(this.newPartner).subscribe(i => {
        this.ngOnInit();
        this.selected = null;
        this.hideAddDialog();
      });
    }
  }
}
