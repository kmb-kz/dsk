import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';
import { AuthService } from '../../../services/common/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-rpmremark',
  templateUrl: 'rpmremark.component.html',
  styleUrls: ['rpmremark.component.css']
})
export class RpmremarkComponent implements OnInit {

  areaId: string;
  areaPartId: any = null;
  infoSelectTree: any;
  issetChildren: boolean;

  area: Promise<CnsArea>;
  areaName: string;
  constructor(private route: ActivatedRoute, private serviceArea: CnsAreaService, public auth: AuthService) {
  }

  ngOnInit() {
    this.areaId = this.route.snapshot.paramMap.get('id');
    this.area = this.serviceArea.area(this.areaId).toPromise();
  }

  onSelect(areaPartId: string) {
    this.areaPartId = areaPartId;
  }

  onSelected(issetChildren: boolean) {
    if (!issetChildren) {
      this.areaPartId = null;
    }
    this.issetChildren = issetChildren;
  }
  onSelectedInfo(infoSelect: any) {
    this.infoSelectTree = infoSelect;
  }

}