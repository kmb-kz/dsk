import { Component, OnInit } from '@angular/core';
import { CnsPart, CnsAreaService } from '../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../cns-area.component';

@Component({
  selector: 'app-cns-area-parts',
  templateUrl: './cns-area-parts.component.html',
  styleUrls: ['./cns-area-parts.component.css']
})
export class CnsAreaPartsComponent implements OnInit {
  parts: CnsPart[] = [];
  statistics = { notMatches: 0, fixed: 0 };
  constructor(private service: CnsAreaService, public model: CnsAreaComponentModel) { }

  ngOnInit() {
    this.service.areaParts(this.model.Id, null).subscribe(i => {
      i.forEach(part => {
        this.statistics.notMatches += part.notMatches;
        this.statistics.fixed += part.fixed;
      });
      this.parts = i;
    });
  }

  addAreaPart() {
    this.parts.push(new CnsPart());
  }
  removeAreaPart(part) {
    var index = this.parts.indexOf(part);
    this.parts.slice(index, index + 1);
  }
}
