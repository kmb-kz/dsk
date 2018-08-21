import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaState } from '../../area.state';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  areas: any[];
  constructor(private route: ActivatedRoute, state: AreaState) {
    state.ModuleId = parseInt(route.snapshot.params['module']);
  }

  ngOnInit() {
  }

}
