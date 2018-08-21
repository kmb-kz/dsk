import { Component, OnInit } from '@angular/core';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';

@Component({
  selector: 'app-cns-index',
  templateUrl: './cns-index.component.html',
  styleUrls: ['./cns-index.component.css']
})
export class CnsIndexComponent implements OnInit {
  area: Promise<CnsArea>;
  constructor(private service: CnsAreaService) { }

  ngOnInit() {
    var areaId = localStorage.getItem('cns-last-area-id');
    if (areaId) {
      this.area = this.service.area(areaId).toPromise();
    }
  }

}
