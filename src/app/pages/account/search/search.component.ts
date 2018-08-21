import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { AdUserInfo } from '../../../services/models/AdUserInfo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  results: AdUserInfo[]; 
  searchUser: string; 
  @Output() selectedUser = new EventEmitter<AdUserInfo>(); 
  _selectedUser:AdUserInfo; 
  constructor(private service: UsersService) { }

  ngOnInit() {
  }

  search(event)
  {
    this.service.searchFromFIO(event.query).subscribe(x=>{
      this.results = x
    });
  }

  select()
  {
    this.selectedUser.emit(this._selectedUser); 
   // this.service.addUserFromAD(this.selectedUser.accountName, this.roleName);
  }
}


export class UserModel {
  id:string; 
  username:string; 
  fullname:string; 
}