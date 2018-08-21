import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/common/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  token = '';
  email: string;
  pass: string;
  inProgress: boolean = false;
  public innerWidth: any;
  public innerHeight: any;

  constructor(private app: AppComponent, public auth: AuthService,
    private router: Router, private services: DataService) {
    app.setPageWithoutSidebar(true);
    app.setPageWithoutHeader(true);
    this.errorMessage = auth.message;
  }

  ngOnInit() {
    this.app.setPageWithoutSidebar(true);
    this.app.setPageWithoutHeader(true);
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  authUser(email: string, pass: string) {
    this.inProgress = true;
    if ((email.length > 0) && (pass.length > 0)) {
      this.auth.login(email, pass).subscribe(
        data => {
          console.log("asd");
          localStorage.setItem('tokenUser', data.token);
          localStorage.setItem('userName', data.userName);
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('roles', data.roles.join(","));
          localStorage.setItem('rolesDescr', data.rolesDescr.join(", "));
          //var returnUrl = this.auth.redirectUrl ? this.auth.redirectUrl : 'ppo/object';
          var returnUrl = 'objects';
          if (this.auth.isInRole("ProjectManager")) returnUrl = 'std/area/areas';
          if (this.auth.isInRole("CnsAdmin")) returnUrl = 'cns/area';
          if (this.auth.isInRole("CnsInspector")) returnUrl = 'cns/area';
          if (this.auth.isInRole("CnsManager")) returnUrl = 'okk/finite';
          if (this.auth.isInRole("Partner")) returnUrl = 'cns/area';
          if (this.auth.isInRole("PpoAdmin")) returnUrl = 'ppo/object';
          if (this.auth.isInRole("PpoInspector")) returnUrl = 'ppo/object';
          if (this.auth.isInRole("Inspector")) returnUrl = 'ppo/object';
          if (this.auth.isInRole("InspectorRpm")) returnUrl = 'rpm/object';
          if (this.auth.isInRole("ManagerRpm")) returnUrl = 'rpm/object';
          if (this.auth.isInRole("Developers")) returnUrl = 'rpm/object';
          if (this.auth.isInRole("Admin")) returnUrl = 'objects';
          if (this.auth.isInRole("OkkInspector")) returnUrl = 'okk/finite';
          //if (this.auth.isInRole("OkkAdmin")) returnUrl = 'okk/finite'


          this.auth.redirectUrl = '';
          this.auth.message = '';
          this.app.setPageWithoutSidebar(false);
          this.app.setPageWithoutHeader(false);
          this.router.navigate([returnUrl]);
          return false;
        },
        error => {
          this.errorMessage = 'Логин или пароль не правильно введен!!!';
          this.inProgress = false;
        }
      );
    } else {
      this.errorMessage = 'Вы не ввели логин и пароль!!!';
      this.inProgress = false;
    }

  }

}
