import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/common/auth.service';
import { NotificationsService } from '../services/notifications/notifications.service';
import { PushMessagesModel } from '../services/models/push-messages.model';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page_with_two_sidebar: boolean;
  @Input() page_with_mega_menu: boolean;

  userName = '';
  cntNotification = 0;
  role: any;
  notitifications: PushMessagesModel[];
  displayAddLeader = 'none';
  selectNotification = new PushMessagesModel();

  constructor(public auth: AuthService, private pushService: NotificationsService,
    private router: Router) {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.role = localStorage.getItem('roles');
    this.getNotification();
  }

  getNotification() {
    this.pushService.getNotificationsServ().subscribe((data: PushMessagesModel[]) => {
      let cnt = 0;
      this.notitifications = data['result'];
      if (this.notitifications!=null)
      for (let rec of this.notitifications) {
        if (!rec.isOpened) {
          cnt = cnt + 1;
        }
      }
      this.cntNotification = cnt;
    },
      err => {
        console.log(err);
        alert('Ошибка обработки запроса.');
      });
  }

  selNotificationCL(sel: PushMessagesModel) {
    this.selectNotification = sel;
    this.selectNotification.isOpened = true;
    this.cntNotification = this.cntNotification - 1;
    this.pushService.openNotificationsServ(sel.id).subscribe(data => {
      if (data['success'] = false) {
        this.selectNotification.isOpened = false;
        this.cntNotification = this.cntNotification + 1;
      }
    });
  }

  selNotificationInAll(sel: PushMessagesModel) {
    this.selectNotification = sel;
  }

  logout() {
    this.auth.redirectUrl = this.router.url;
    this.auth.logout();
  }
}
