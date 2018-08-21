import { Component, OnInit, Input } from '@angular/core';
import { Nsi } from '../../../../../../services/models/models';
import { UserInfo, RpmSendUsersService } from '../../../../../../services/rpm/rpm-send-users.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterComponent } from '../../../../../../components/toaster/toaster.component';
declare var jQuery: any;

@Component({
  selector: 'app-rpm-statistics-critical',
  templateUrl: './rpm-statistics-critical.component.html',
  styleUrls: ['./rpm-statistics-critical.component.css']
})
export class RpmStatisticsCriticalComponent implements OnInit {

  @Input() areaId: string;
  keepSorted = true;
  key: string;
  disabled = false;
  confirmed: any[];
  constructives: Nsi[];
  filter = true;
  display: string;
  userList: UserInfo[];
  areaUsers: UserInfo[];
  private sourceStations: Array<any>;
  private confirmedStations: Array<any>;
  idObject: string;
  constructor(private route: ActivatedRoute, private service: RpmSendUsersService,
    private toaster: ToasterComponent) {
    this.idObject = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getUserList();
    this.doReset();
    this.getAreaUserList(this.idObject);
  }

  getAreaUserList(areaId: string) {
    this.service.getAreaUsers(areaId, 1).subscribe(
      data => {
        if (data.success) {
          this.areaUsers = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getUserList() {
    this.service.getUsers().subscribe(
      data => {
        this.userList = data;
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  saveUserList() {
    this.service.addUser(this.confirmed, this.idObject, 1).subscribe(
      data => {
        if (data.success) {
          jQuery('#modal-dialogUsers2').modal('hide');
          this.getAreaUserList(this.idObject);
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  remove(receiverId: string) {
    this.service.deleteUser(receiverId).subscribe(x => {
      this.getAreaUserList(this.idObject);
    });
  }
  doReset() {
    this.confirmedStations = new Array<any>();
    this.useStations();
  }

  private useStations() {
    this.key = 'id';
    this.display = 'name';
    this.keepSorted = true;
    this.confirmed = this.confirmedStations;
  }

}
