import { Component, OnInit } from '@angular/core';
import { AreaComponentModel } from '../AreaComponentModel';

@Component({
  selector: 'app-areadetails',
  templateUrl: './areadetails.component.html',
  styleUrls: ['./areadetails.component.css']
})
export class AreadetailsComponent implements OnInit {
  
  constructor(public model: AreaComponentModel) {
    
  }

  ngOnInit() {
    this.model.Model.then(i => {
      console.log(i);
    });
  }

}
