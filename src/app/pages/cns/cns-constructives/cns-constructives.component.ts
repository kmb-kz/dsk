import { Component, OnInit } from '@angular/core';
import { NsiService } from '../../../services/nsi.service';
import { Nsi } from '../../../services/models/models';
import { Constructive, CnsConstructiveService } from '../../../services/cns/cns-constructive.service';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';

@Component({
  selector: 'app-cns-constructives',
  templateUrl: './cns-constructives.component.html',
  styleUrls: ['./cns-constructives.component.css']
})
export class CnsConstructivesComponent implements OnInit {

  constructor(private nsi: NsiService, private service: CnsConstructiveService, private areaService: CnsAreaService) { }
  selected: ConstructiveTree;
  constructives: ConstructiveTree[];
  newConstructive: Constructive = new Constructive();
  constructive: Constructive;
  showAddDialogFlag: boolean;
  showEditDialogFlag: boolean;
  showRemoveDialogFlag: boolean;
  contextMenus: any;
  areas: CnsArea[];
  filterArea: string = null;
  filterCnstr: string = "";
  height: string;
  ngOnInit() {
    this.height = (window.screen.height - 300) + 'px';
    this.areaService.areas().subscribe(x => {
      this.areas = x
    });
    this.loadData();
    this.contextMenus = [
      { label: 'Добавить подконструктив', icon: 'fa-plus', command: (event) => this.addChildDialog() },
      { label: 'Редактировать объем', icon: 'fa-edit', command: (event) => this.showEditVolume() }
    ];
  }
  loadData() {

    this.nsi.constructivesTreeTable(this.filterArea, this.filterCnstr, true).then(
      x => {
        this.constructives = x
      }
    );
  }
  onSelect(event) { }
  handleUpdate(event) {
    if (event)
      this.loadData();
  }
  cancelEditVolume() {
    this.showEditDialogFlag = false;
  }
  showEditVolume() {
    this.showEditDialogFlag = true;
  }
  saveVolume() {
    this.service.saveVolume(this.selected.data.id, this.selected.data.volume).subscribe(i => {
      this.showEditDialogFlag = false;
    });
  }
  addChildDialog() {
    this.newConstructive.id = this.selected.data.id;
    this.showAddDialogFlag = true;
  }
  addChild() {
    this.service.addChild(this.newConstructive).subscribe(i => {
      this.loadData();
    });
    this.showAddDialogFlag = false;
  }
  cancel() {
    this.showAddDialogFlag = false;
  }
  cancelRemove() {
    this.showRemoveDialogFlag = false;
  }
  showRemove() {
    this.showRemoveDialogFlag = true;
    this.newConstructive = this.selected.data;
  }
  remove() {
    if (this.selected.data.id) {
      this.service.removeConstructive(this.newConstructive.id).subscribe(
        i => {
          if (i) {
            this.loadData();
            this.selected = null;
            this.cancelRemove();
          }
        }
      );
    }
  }



}
export class ConstructiveTreeItem {
  id: string;
  name: string;
  volume: number;
}
export class ConstructiveTree {
  data: ConstructiveTreeItem;
  children: ConstructiveTree[];
}