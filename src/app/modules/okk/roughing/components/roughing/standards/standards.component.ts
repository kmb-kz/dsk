import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})
export class StandardsComponent implements OnInit {
  @Input() standards: any[];
  constructor() { }

  ngOnInit() {
  }

}
