import { Component, OnInit, Input } from '@angular/core';
import { CnsPart, CnsAreaService } from '../../../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../../../../cns/cns-area/cns-area.component';
import { AuthService } from '../../../../../../../services/common/auth.service';
import { NsiService } from '../../../../../../../services/nsi.service';
import { RpmAreaPartsService, SnapConstructiveAreaPart } from '../../../../../../../services/rpm/rpm-area-parts.service';
import { RpmConstructivesService } from '../../../../../../../services/rpm/rpm-constructives.service';
import { Nsi } from '../../../../../../../services/models/models';
declare var jQuery: any;

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  @Input() parts: CnsPart[];
  part: CnsPart;
  partConstructives: Nsi;
  areaPartConstructive: Nsi;
  areaPartConstructiveId: string;
  snapConstructiveAreaPart: SnapConstructiveAreaPart = new SnapConstructiveAreaPart();
  constructor(public areaModel: CnsAreaComponentModel, private service: CnsAreaService,
    private serviceRpm: RpmAreaPartsService, private serviceConstructive: RpmConstructivesService,
    public auth: AuthService, private nsi: NsiService) {
  }

  ngOnInit() {
    this.getConstructive();
    this.getAreaPartConstructive();
  }
  add() {
    this.part = new CnsPart();
  }
  edit(part) {
    this.part = part;
  }
  cancel() {
    this.part = null;
  }

  save() {
    if (this.part.name) {
      if (this.part.id) {
        this.service.partUpdate({ id: this.part.id, name: this.part.name })
          .subscribe(i => {
          });
      } else {
        this.parts.push(this.part);
        this.serviceRpm.partInsert({ name: this.part.name, typeId: 1, areaId: this.areaModel.Id, parentId: this.areaModel.PartId })
          .subscribe(i => {
            this.part.id == i;
          });
      }
    }
    this.part = null;
  }

  delete(id, index) {
    this.serviceRpm.partDelete(id).subscribe(
      data => { });
    this.parts.splice(index, 1);
  }

  getContruct() {
    this.getAreaPartConstructive();
  }

  getConstructive() {
    this.serviceConstructive.getPartConstuctives().subscribe(
      i => {
        if (i.success) {
          this.partConstructives = i.result;
        }
      });
  }

  getAreaPartConstructive() {
    this.serviceRpm.getAreaPartConstructive(this.areaModel.PartId).subscribe(
      i => {
        if (i.success) {
          this.areaPartConstructive = i.result;
        }
      });
  }

  saveSnapping() {
    this.snapConstructiveAreaPart.areaPartId = this.areaModel.PartId;
    this.snapConstructiveAreaPart.constructiveId = this.areaPartConstructiveId;
    this.serviceRpm.snapConstructivesAreaPart(this.snapConstructiveAreaPart).subscribe(
      i => {
        if (i.success) {
          this.areaPartConstructive = new Nsi();
          this.getAreaPartConstructive();
        }
      });
  }

}
