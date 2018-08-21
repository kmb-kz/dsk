import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FixCLItems } from '../../../../../services/rpm/rpm-fix-checklist.service';

@Component({
  selector: 'app-rpm-clf-item',
  templateUrl: './rpm-clf-item.component.html',
  styleUrls: ['./rpm-clf-item.component.css']
})
export class RpmClfItemComponent implements OnInit {

  @Input() itemsCheckList: FixCLItems;
  @Input() detour: any;

  constructor() { }

  ngOnInit() {
  }



}
