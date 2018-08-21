import { Component, OnInit } from '@angular/core';
import { UsersService,  ProfileModel } from '../../../services/users/users.service';

@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.component.html',
  styleUrls: ['./changeprofile.component.css']
})
export class ChangeprofileComponent implements OnInit {
 
  /*password: string;
  confirmpassword: string;
  oldpassword: string;*/
  profile: ProfileModel = new ProfileModel();
  constructor(private service: UsersService) { }

  ngOnInit() {
   
    this.service.getProfile().subscribe(
      data => {this.profile = data;})
  }

  changeProfile(){
    console.log("kek");
  
    this.service.changeprofile(this.profile).subscribe(x=>{
      
    });
  }

}
