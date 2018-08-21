import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Standard } from '../../../../../services/std/standard.service';

@Component({
  selector: 'app-standard-item',
  templateUrl: './standard-item.component.html',
  styleUrls: ['./standard-item.component.css']
})
export class StandardItemComponent implements OnInit {

 
  @Input() item: Standard; 
  @Output() change  = new EventEmitter<string>() ; 
  selectedId: any;
  constructor() { }

  ngOnInit() {
  }

  select(id:string){
    this.change.emit(id); 
     
  }

}
