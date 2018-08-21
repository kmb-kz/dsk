import { Component, OnInit } from '@angular/core';
import { StandardComponentModel } from '../StandardComponentModel';

@Component({
  selector: 'app-standarddetails',
  templateUrl: './standarddetails.component.html',
  styleUrls: ['./standarddetails.component.css']
})
export class StandarddetailsComponent implements OnInit {

  constructor(public model: StandardComponentModel) { }

  ngOnInit() {
    
  }

}
