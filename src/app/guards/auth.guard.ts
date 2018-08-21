import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/common/auth.service';
import { forEach } from '@angular/router/src/utils/collection';
import { AppComponent } from '../app.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const roles = <string[]>next.data.roles;
    if (roles) {
      let hasRole = false;
      for (let i = 0; i < roles.length; i++) {

        if (roles[i] === 'all') {
          hasRole = true;
          break;
        }
        if (this.auth.isInRole(roles[i])) {
          hasRole = true;
          break;
        }
      }
      if (hasRole)
        return true;
    } else {
      if (this.auth.isAuthenticated())
        return true;
    }
    this.auth.message = "У вас нет доступа к этому разделу.";
    this.auth.redirectUrl = state.url;
    this.router.navigate([this.auth.loginUrl]);
    return false;
  }
}
