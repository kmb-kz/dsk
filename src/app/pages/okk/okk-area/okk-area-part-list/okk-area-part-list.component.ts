import { Component, OnInit, Input } from '@angular/core';
import { CnsPart, CnsAreaService } from '../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../cns/cns-area/cns-area.component';
import { NsiService } from '../../../../services/nsi.service';
import { AuthService } from '../../../../services/common/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-okk-area-part-list',
  templateUrl: './okk-area-part-list.component.html',
  styleUrls: ['./okk-area-part-list.component.css']
})
export class OkkAreaPartListComponent implements OnInit {

  @Input() parts: CnsPart[];
  @Input() partTypeId: string;

  part: CnsPart;
  pathValue: string;
  partIds: string;
  checkRange: boolean = true;

  constructor(public areaModel: CnsAreaComponentModel, private service: CnsAreaService, private route: ActivatedRoute,
    public auth: AuthService, private nsi: NsiService) {
  }

  ngOnInit(): void {
    this.pathValue = localStorage.getItem('pathValue');
    this.partIds = this.route.snapshot.paramMap.get('id');
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
      } else {

        // this.nsi.areaPartTypes().then(i => {
        //   this.part.typeName = i.filter(i => i.id === this.part.typeId)[0].name;
        // });

        this.service.partInsert(
          { name: this.part.name, typeId: this.part.typeId, areaId: this.areaModel.Id, parentId: this.areaModel.PartId })
          .subscribe(i => {
            this.parts = [];
            if (this.areaModel.Id !== this.route.snapshot.paramMap.get('id')) {
              this.service.areaParts(this.areaModel.Id, this.route.snapshot.paramMap.get('id')).subscribe(data => {
                this.parts = data;
              });
            } else {
              this.service.areaParts(this.areaModel.Id, '').subscribe(data => {
                this.parts = data;
              });
            }

          });
        // this.parts.push(this.part);

      }
      //this.part = null;
    }
  }


  delete(part, index) {
    if (confirm('Вы хотите удалить ' + part.typeName + ' ' + part.name + '?')) {
      this.parts.splice(index, 1);
      this.service.partDelete(part.id).subscribe(i => {
        console.log(i);
      });
    }
  }

}
