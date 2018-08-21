import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-constructive',
  templateUrl: './constructive.component.html',
  styleUrls: ['./constructive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructiveComponent implements OnInit {
  @Input() constructive: any;
  constructor() { }

  ngOnInit() {
  }

}
