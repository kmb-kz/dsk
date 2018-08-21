import { Component, OnInit, Input } from '@angular/core';
import { AreaState } from '../../../area.state';

@Component({
  selector: 'app-module-buttons',
  templateUrl: './module-buttons.component.html',
  styleUrls: ['./module-buttons.component.css']
})
export class ModuleButtonsComponent implements OnInit {
  @Input() part: any;
  constructor(public state: AreaState) { }

  ngOnInit() {
  }

}
