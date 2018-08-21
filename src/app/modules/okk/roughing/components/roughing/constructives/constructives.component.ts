import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-constructives',
  templateUrl: './constructives.component.html',
  styleUrls: ['./constructives.component.css']
})
export class ConstructivesComponent implements OnInit {
  @Input() constructives: any[];
  @Output() select = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
}
