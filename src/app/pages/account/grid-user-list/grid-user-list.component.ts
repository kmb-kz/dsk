import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../../services/models/user';
import { RequestEditUser, UsersService } from '../../../services/users/users.service';
import { AdUserInfo } from '../../../services/models/AdUserInfo';
import { AccountComponent } from '../account.component';
import { Role } from '../../../services/models/role';
import { ResponseCl } from '../../../services/models/responseCl';
import { MaterialCostsModel } from "../../../services/cns/cns-edit-volume.service";
import { Nsi } from '../../../services/models/models';
import { ObjectsService } from '../../../services/objects.service';
import { NsiService } from '../../../services/nsi.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
import { Observable } from 'rxjs/Observable';
import { DataTable } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-grid-user-list',
  templateUrl: 'grid-user-list.component.html',
  styleUrls: ['grid-user-list.component.css']
})
export class GridUserListComponent implements OnInit {
  displayDialog: boolean;
  displayDialogEditRole = false;
  user: User = new User();
  selectedUser: User;
  // newUser: boolean;

  @Input() userList: User[];

  adUserInfo: AdUserInfo = new AdUserInfo;
  adUserInfoList: AdUserInfo[];
  searchValue: string;
  roleList: Role[]; // список ролей
  errorMessage = '';
  headerMsgValue: string;
  infoMsgValue: string;
  searchTxt: string;
  showDialog = false;
  showADSearch = true;

  areas: Nsi[];
  areaParts: Nsi[];
  companies: Nsi[];
  areaStatuses: Nsi[];
  userAreas: Nsi[];
  selectedArea: string;
  selectedAreaStatus: number;
  selectedAreaPart: string;
  selectedCompany: string;
  @ViewChild('dt') dt: DataTable;
  notFound: boolean = false;
  height: string;
  first: number = 0;

  constructor(private usersService: UsersService, private toaster: ToasterComponent,
    private account: AccountComponent, private areaService: ObjectsService, private nsi: NsiService) {
    this.height = (window.screen.height - 300) + 'px';
    areaService.searchResult('', null).subscribe(data => {
      this.areas = data.result;
    });
    nsi.statusBuilding().then(x => {
      this.areaStatuses = x;
    });
  }
  search(searchTxt: string) {
    this.usersService.getAllUsers(searchTxt).subscribe(
      data => {
        this.userList = data.result;
        this.first = 0;
        this.dt.reset();
      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );
  }

  update() {
    this.dt.reset();
  }
  eventHandlerSearch(event) {
    this.search(this.searchTxt);
  }
  ngOnInit() {
    this.getRoleList();
    //this.search('');
    // this.getAllUsersAD();
  }
  removeRole(roleId: string) {
    this.usersService.removeRole(this.selectedUser.id, roleId).subscribe(x => {
      this.getRoles(this.selectedUser.id);
      this.search('');

    });
  }
  getRoles(usreId: string) {
    this.usersService.userRoles(this.selectedUser.id).subscribe(x => {
      this.selectedUser.roles = x;
    });
  }
  getAreas() {
    this.areaService.byUser(this.selectedUser.id).subscribe(x => {
      this.userAreas = x;
    });
  }
  changeAreaStatus() {
    this.areaService.searchResult('', this.selectedAreaStatus).subscribe(data => {
      this.areas = data.result;

      this.areaParts = null;
    });
  }
  changeArea() {
    this.nsi.areaParts(this.selectedArea).then(x => {
      this.areaParts = x;
    });
  }
  changeAreaPart() {
    this.nsi.companies(this.selectedAreaPart).then(x => {
      this.companies = x;
    });
  }
  removeUserArea(id) {
    this.areaService.removeUserArea(id).subscribe(x => {
      this.getAreas();
    });
  }
  addUser() {
    if (this.selectedArea == null) {
      this.toaster.popToast('error', 'Внимание!', 'Вы не выбрали Объект или Блок');
    } else {
      this.areaService.addUser(this.selectedUser.id, this.selectedArea, this.selectedAreaPart, this.selectedCompany).subscribe(data => {
        this.getAreas();
      });
    }
  }

  showDialogToAdd() {
    this.adUserInfo.firstName = '';
    this.adUserInfo.lastName = '';
    this.adUserInfo.accountName = '';
    this.adUserInfo.principalName = '';
    this.displayDialog = true;
  }

  showDialogToEdit(selUser: User) {
    if (selUser != null) {
      this.displayDialogEditRole = true;
    } else {
      this.showMessage('Уведомление', 'Выберите пользователя из списка');
    }
  }

  searchFromAD(accountName: string) {
    this.notFound = false;
    this.usersService.searchFromAD(accountName).subscribe((data: AdUserInfo[]) => {
      if (data.length === 0) {
        this.notFound = true;
        //this.showMessage('Предупреждение', 'Пользователь ненайден в системе Active Directory');
      } else {
        this.adUserInfo = data[0];
      }
    }, err => {
      console.log(err);
      alert('Ошибка обработки запроса.');
    });
  }


  searchFromADByFIO(searchValue) {
    this.notFound = false;
    if (searchValue.query.length > 3) {
      this.usersService.searchFromFIO(searchValue.query).subscribe((data: AdUserInfo[]) => {
        if (data.length === 0) {
          this.notFound = true;
          //this.showMessage('Предупреждение', 'Пользователь ненайден в системе Active Directory');
        } else {
          this.adUserInfoList = data;
        }
      }, err => {
        console.log(err);
        alert('Ошибка обработки запроса.');
      });
    }
  }

  getAllUsersAD() {
    this.notFound = false;
    this.usersService.getAllADUsers().subscribe((data: AdUserInfo[]) => {
      if (data.length === 0) {
        this.notFound = true;
        //this.showMessage('Предупреждение', 'Пользователь не найден в системе Active Directory');
      } else {
        this.adUserInfoList = data;
      }
    }, err => {
      console.log(err);
      alert('Ошибка обработки запроса.');
    });

  }

  close() {
    this.displayDialog = false;
  }

  close_ed() {
    this.displayDialogEditRole = false;
  }

  save(accountName: string, roleId: string) {
    if (roleId !== '5') {
      this.usersService.addUserFromAD(accountName, roleId).subscribe(
        data => {
          if (data.success) {
            this.close();
            this.account.getUsers("");
          } else {
            this.headerMsgValue = 'Внимание!';
            this.infoMsgValue = data.message;
            this.showDialog = true;
          }
        },
        error => {
          this.errorMessage = 'Ошибка на стороне сервера';
        }
      );
    } else {
      this.usersService.addUserPartner(this.adUserInfo).subscribe(data => {
        this.account.getUsers();
      });
    }
  }

  save_ed(roleId: string) {

    this.usersService.editUser(this.selectedUser, roleId).subscribe(
      data => {
        if (data.success) {
          this.close_ed();
          this.account.getUsers();
        } else {
          this.headerMsgValue = 'Внимание!';
          this.infoMsgValue = data.message;
          this.showDialog = true;
        }
      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );

  }

  changePassword(newPassword: string) {

    this.usersService.changePassword(this.selectedUser.id, newPassword).subscribe(
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );

  }

  getRoleList() {
    this.usersService.getRoleList().subscribe((data: ResponseCl) => {
      this.roleList = data.result;
    });
  }

  showMessage(header: string, message: string) {
    this.headerMsgValue = header;
    this.infoMsgValue = message;
    this.showDialog = true;
  }

  userActivateDeactivate(userId: string) {
    this.usersService.userActivateDeactivate(userId).subscribe(data => {
      if (data.success === true) {
        this.account.getUsers();
      } else {
        this.headerMsgValue = 'Внимание!';
        this.infoMsgValue = data.message;
        this.showDialog = true;
      }
    });
  }

  searchInLocal(searchValue) {
    const list = this.adUserInfoList;
    // let filtered : any[] = [];
    for (let i = 0; i < list.length; i++) {
      const rec = list[i];
      if (rec.displayName.toLowerCase().indexOf(searchValue.query.toLowerCase()) == 0) {
        this.adUserInfoList.push(rec);
      }
    }
    // if (searchValue.query) {
    //   this.adUserInfoList.filter(it => {return it.displayName.toLowerCase().includes(searchValue.value);
    //   });
    // }
  }

  changeRole(id: string) {
    this.adUserInfo.roleId = id;
    if (id == '5') {
      this.showADSearch = false;
    } else {
      this.showADSearch = true;
    }
  }

}


//
// class PrimeUser implements User {
//
//
//   constructor(public id?,public fullName?, public email?, public userName?,  public phoneNumber?,  public position?,  public roles?) {}
// }
