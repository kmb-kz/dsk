import { Component, OnInit } from '@angular/core';
import { CnsPart, CnsScheme, CnsAreaService } from '../../../../../services/cns/cns-area.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsAreaComponentModel } from '../../../../cns/cns-area/cns-area.component';
import { AuthService } from '../../../../../services/common/auth.service';

@Component({
  selector: 'app-okk-part-children',
  templateUrl: './okk-part-children.component.html',
  styleUrls: ['./okk-part-children.component.css']
})
export class OkkPartChildrenComponent implements OnInit {

  children: CnsPart[] = [];
  typeId: string;
  partId: string;
  schemes: Promise<CnsScheme[]>;
  settingManager = false;
  manager: any;
  managerId: string;
  managers = [];
  constructor(private service: CnsAreaService, public model: CnsAreaComponentModel,
    private route: ActivatedRoute, private router: Router, public auth: AuthService) {
    service.managers().subscribe(m => {
      this.managers = m;
    });
    this.route.params.forEach(params => {
      this.service.getManager(model.PartId).subscribe(m => {
        this.manager = m;
      });
      this.service.areaParts(this.model.Id, this.model.PartId).subscribe(i => {
        this.children = i;
        if (i.length > 0) {
          this.typeId = i[0].typeId;
        } else {
          this.typeId = '0';
        }
      });
      this.schemes = this.service.partSchemes(this.model.PartId).toPromise();
    });


  }

  ngOnInit() {

  }
  setManager() {
    this.service.setManager(this.model.PartId, this.managerId).subscribe(r => {
      this.manager = this.managers.find(m => m.id == this.managerId);
      this.settingManager = false;
    });
  }
}
