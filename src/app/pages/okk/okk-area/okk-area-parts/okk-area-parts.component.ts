import { Component, OnInit } from '@angular/core';
import { CnsPart, CnsAreaService } from '../../../../services/cns/cns-area.service';
import { CnsAreaComponentModel } from '../../../cns/cns-area/cns-area.component';

@Component({
  selector: 'app-okk-area-parts',
  templateUrl: './okk-area-parts.component.html',
  styleUrls: ['./okk-area-parts.component.css']
})
export class OkkAreaPartsComponent implements OnInit {

  parts: CnsPart[] = [];
  statistics = { notMatches: 0, fixed: 0 };
  constructor(private service: CnsAreaService, public model: CnsAreaComponentModel) { }

  ngOnInit() {
    this.loadAreaParts();
  }

  loadAreaParts() {
    this.parts = [];
    this.service.areaParts(this.model.Id, null).subscribe(i => {
      i.forEach(part => {
        this.statistics.notMatches += part.notMatches;
        this.statistics.fixed += part.fixed;
      });
      this.parts = i;
    });
  }

  addAreaPart() {
    this.loadAreaParts();
  }
  removeAreaPart(part) {
    var index = this.parts.indexOf(part);
    this.parts.slice(index, index + 1);
  }
}
