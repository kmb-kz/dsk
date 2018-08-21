import { Component, OnInit } from '@angular/core';
import { CnsScheme, CnsPart } from '../../../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../../../../cns/cns-area/cns-area.component';
import { AuthService } from '../../../../../../../services/common/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import { RpmRemarkService } from '../../../../../../../services/rpm/rpm-remark.service';

@Component({
  selector: 'app-rpm-part-children',
  templateUrl: './rpm-part-children.component.html',
  styleUrls: ['./rpm-part-children.component.css']
})
export class RpmPartChildrenComponent implements OnInit {

  children: CnsPart[] = [];
  schemes: Promise<CnsScheme[]>;
  constructor(private service: RpmRemarkService, public model: CnsAreaComponentModel,
    private route: ActivatedRoute, private router: Router, public auth: AuthService) {

    this.route.params.forEach(params => {
      this.service.getAreaParts(this.model.PartId, localStorage.getItem('rpm-last-area-id')).subscribe(i => {
        if (i.success) {
          this.children = i.result;
        }
      });
    });
  }

  ngOnInit() {
    console.log(this.model.Id);
  }

}
