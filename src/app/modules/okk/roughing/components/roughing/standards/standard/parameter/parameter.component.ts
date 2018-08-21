import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  @Input() parameter: any;
  showDetails: boolean;
  constructor() { }

  ngOnInit() {
  }

}
