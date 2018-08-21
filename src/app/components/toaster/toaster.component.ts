import { Component} from '@angular/core';
import { ToasterService, ToasterConfig, Toast } from 'angular2-toaster';

@Component({
  moduleId: module.id,
  selector: 'app-toaster',
  templateUrl: 'toaster.component.html',
  styleUrls: ['toaster.component.css']
})
export class ToasterComponent {

  private toasterService: ToasterService;

  public config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  popToast(typeError,headerText,msg) {
    var toast: Toast = {
      type: typeError,
      title:headerText,
      body: msg
    };

    this.toasterService.pop(toast);
  }

}
