import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CnsPart, CnsAreaService } from '../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../cns-area.component';
import { AuthService } from '../../../../services/common/auth.service';
import { NsiService } from '../../../../services/nsi.service';
import { Nsi } from '../../../../services/models/models';

@Component({
  selector: 'app-cns-area-part-list',
  templateUrl: './cns-area-part-list.component.html',
  styleUrls: ['./cns-area-part-list.component.css']
})
export class CnsAreaPartListComponent implements OnInit {
  @Input() parts: CnsPart[];
  part: CnsPart;
  constructor(public areaModel: CnsAreaComponentModel, private service: CnsAreaService,
    public auth: AuthService, private nsi: NsiService) {

  }

  ngOnInit() {
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
    if (this.part.name && this.part.typeId) {
      if (this.part.id) {
        this.service.partUpdate({ id: this.part.id, name: this.part.name })
          .subscribe(i => {
          });
      }
      else {
        this.parts.push(this.part);
        this.nsi.areaPartTypes().then(i => {
          this.part.typeName = i.filter(i => i.id == this.part.typeId)[0].name
        });
        this.service.partInsert({ name: this.part.name, typeId: this.part.typeId, areaId: this.areaModel.Id, parentId: this.areaModel.PartId })
          .subscribe(i => {
            this.part.id == i;
          })
      }
      this.part = null;
    }
  }
  delete(part, index) {
    if (confirm("Вы хотите удалить " + part.typeName + ' ' + part.name + '?')) {
      this.parts.splice(index, 1);
      this.service.partDelete(part.id).subscribe();
    }
  }
}
