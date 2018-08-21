import { Component, OnInit } from '@angular/core';
import { AreaService, Area } from '../../../../services/std/area.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  areas: Promise<Area[]>;
  search = '';
  constructor(private service: AreaService) {
  }

  ngOnInit() {
    this.load();
  }
  load() {
    this.areas = this.service.areas(this.search).toPromise();
  }
  searchArea() {

    this.areas = this.service.areas(this.search).toPromise();
  }
}
