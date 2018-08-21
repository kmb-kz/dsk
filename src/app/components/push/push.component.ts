import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { PushMessagesModel } from '../../services/models/push-messages.model';
import { ToasterComponent } from '../toaster/toaster.component';


@Component({
  moduleId: module.id,
  selector: 'app-push',
  templateUrl: 'push.component.html',
  styleUrls: ['push.component.css']
})
export class PushComponent implements OnInit {

  notitifications: PushMessagesModel[];

  constructor(private pushService: NotificationsService, private toaster: ToasterComponent) {
  }

  ngOnInit() {
    this.getNotification();
  }

  getNotification() {
    this.pushService.getNotificationsServ().subscribe((data: PushMessagesModel[]) => {
      //console.log(data);
      this.notitifications = data;
      if (this.notitifications!=null)
      for (let i = 0; i < this.notitifications.length; i++) {
        this.toaster.popToast('notification', this.notitifications[i].title, this.notitifications[i].body);
      }
    });
  }

}
