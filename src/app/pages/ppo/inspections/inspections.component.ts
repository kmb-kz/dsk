import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-inspections',
  templateUrl: 'inspections.component.html',
  styleUrls: ['inspections.component.css']
})
export class InspectionsComponent implements OnInit {

  events: any[];
  constructor() { }

  ngOnInit() {
  }

}
