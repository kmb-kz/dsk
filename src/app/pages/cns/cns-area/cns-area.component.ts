import { Component, OnInit, Injectable } from '@angular/core';
import { CnsArea, CnsAreaService, CnsPart, CnsScheme } from '../../../services/cns/cns-area.service';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../../../services/cns/cns-partner.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CnsAreaComponentModel {
  Id:string;
  Area:Promise<CnsArea>;
  Scheme:Promise<CnsScheme>;
  PartId:string;

  Partner: Partner = new Partner();
  ConstructiveId = new BehaviorSubject("");
  ContractId = new BehaviorSubject("");
}

@Component({
  selector: 'app-cns-area',
  templateUrl: './cns-area.component.html',
  styleUrls: ['./cns-area.component.css'],
  providers: [CnsAreaComponentModel]
})
export class CnsAreaComponent implements OnInit {

  constructor(public model: CnsAreaComponentModel, private route: ActivatedRoute,
    private service: CnsAreaService) {

  }

  ngOnInit() {
    this.model.Id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('cns-last-area-id', this.model.Id);
    this.model.Area = this.service.area(this.model.Id).toPromise();
  }

}
