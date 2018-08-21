import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checklist-more-info',
  templateUrl: './checklist-more-info.component.html',
  styleUrls: ['./checklist-more-info.component.css']
})
export class ChecklistMoreInfoComponent implements OnInit {

  @Input() answers: any;
  @Input() groupFancy: number;
  constructor() { }

  ngOnInit() {
    
  }

}
