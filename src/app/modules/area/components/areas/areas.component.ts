import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  areas: any[];
  constructor(private service: AreaService) {
    service.areas().subscribe(i => {
      this.areas = i;
    });
  }

  ngOnInit() {
  }

}
