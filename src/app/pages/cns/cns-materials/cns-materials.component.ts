import { Component, OnInit } from '@angular/core';
import { NsiService } from '../../../services/nsi.service';
import { Nsi } from '../../../services/models/models';

@Component({
  selector: 'app-cns-materials',
  templateUrl: './cns-materials.component.html',
  styleUrls: ['./cns-materials.component.css']
})
export class CnsMaterialsComponent implements OnInit {

  materials: Nsi[];
  newMaterial: Nsi = new Nsi();
  selected: Nsi;

  showAddDialogFlag: boolean;
  showRemoveDialogFlag: boolean;


  constructor(private nsi: NsiService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.nsi.materials().subscribe(x => {
      this.materials = x.result;
    });
  }

  add() {
    if (this.newMaterial.id) {
      this.nsi.editMaterial(this.newMaterial).subscribe(x => {
        this.showDialog(false);
        this.load();
      });
    } else {
      this.nsi.addMaterial(this.newMaterial).subscribe(x => {
        this.showDialog(false);
        this.load();
      });
    }
  }

  remove() {
    if (this.newMaterial.id) {
      this.nsi.removeMaterial(this.newMaterial).subscribe(x => {
        this.showRemoveDialog(false);
        this.load();
      });
    }
  }

  showDialog(show: boolean) {
    this.showAddDialogFlag = show;
  }
  showEditDialog(show: boolean) {
    this.showAddDialogFlag = show;
    this.newMaterial = this.selected;
  }
  showRemoveDialog(show: boolean) {
    this.newMaterial = this.selected;
    this.showRemoveDialogFlag = show;
  }

}
