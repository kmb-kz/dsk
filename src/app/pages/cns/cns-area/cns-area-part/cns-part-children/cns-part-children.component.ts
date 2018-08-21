import { Component, OnInit, Input } from '@angular/core';
import { CnsAreaService, CnsPart, CnsScheme } from '../../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../cns-area.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Nsi } from '../../../../../services/models/models';
import { AuthService } from '../../../../../services/common/auth.service';

@Component({
  selector: 'app-cns-part-children',
  templateUrl: './cns-part-children.component.html',
  styleUrls: ['./cns-part-children.component.css']
})
export class CnsPartChildrenComponent implements OnInit {
  children: CnsPart[] = [];
  schemes: Promise<CnsScheme[]>;
  constructor(private service: CnsAreaService, public model: CnsAreaComponentModel, 
    private route: ActivatedRoute, private router : Router, public auth: AuthService) {
    this.route.params.forEach(params => {
      this.service.areaParts(this.model.Id, this.model.PartId).subscribe(i=>{
        this.children = i;
      });
      this.schemes = this.service.partSchemes(this.model.PartId).toPromise();
      // this.children.then(i => {
      //   if (i.length == 0) {
      //     if (this.route.children.length == 0) {
      //       this.router.navigate(["../","scheme"], { relativeTo: this.route })
      //     } 
      //   }
      // });
    });
  }

  ngOnInit() {

  }

}
