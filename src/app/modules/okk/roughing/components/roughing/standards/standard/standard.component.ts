import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
  @Input() standard: any;
  constructor() { }

  ngOnInit() {
  }

}
