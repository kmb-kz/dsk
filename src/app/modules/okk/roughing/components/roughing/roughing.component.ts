import { Component, OnInit } from '@angular/core';
import { RoughingService } from '../../services/roughing.service';
import { ActivatedRoute } from '@angular/router';
import { RoughingState } from '../../roughing.state';
import { FilterModel } from './filter/filter.component';
@Component({
  selector: 'app-roughing',
  templateUrl: './roughing.component.html',
  styleUrls: ['./roughing.component.css']
})
export class RoughingComponent implements OnInit {
  standards: any[];
  constructives: any[];
  filter: FilterModel;
  constructor(private service: RoughingService, route: ActivatedRoute, state: RoughingState) {
    state.PartId = route.snapshot.params["id"];
  }

  ngOnInit() {
  }

  getConstructives(model: FilterModel) {
    this.filter = model;
    this.service.constructives(model.roomId).subscribe(r => {
      this.constructives = r;
    })
  }
  getStandarts(constructiveId: string) {
    this.service.standards(constructiveId).subscribe(r => {
      this.standards = r;
    })
  }

}
