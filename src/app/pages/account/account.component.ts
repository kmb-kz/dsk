import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { UserList } from '../../services/models/UserList';



@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }

  userList: UserList;

  // userList: Observable<User[]>;
  errorMessage = '';

  ngOnInit() {
    this.getUsers("");

    // this.usersService.getAllUsers();
  }

  getUsers(searchTxt: string = "") {
    this.usersService.getAllUsers("").subscribe(
      data => {

        this.userList = data.result;
      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );
  }




}
