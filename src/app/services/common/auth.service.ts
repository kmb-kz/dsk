import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { environment } from '../../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class AuthService {
  redirectUrl: string;
  loginUrl = '/login';
  message: string;

  constructor(private http: HttpClient, public router: Router) {
    // http.get()
  }
  login(email: string, password: string): Observable<Ticket> {
    return this.http.post<Ticket>(environment.apiUrl + 'api/Account/GenerateToken', { email, password });
  }
  username(): string {
    return localStorage.getItem('userName');
  }
  userId(): string {
    return localStorage.getItem('userId');
  }
  roles(): string {
    return localStorage.getItem('roles');
  }
  rolesDescr(): string {
    return localStorage.getItem('rolesDescr');
  }
  getClaims(): Claims {
    const token = localStorage.getItem('tokenUser');
    if (!token)
      return null;
    return <Claims>decode(token);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  isAuthenticated() {
    var claims = this.getClaims();
    if (claims && new Date(claims.exp * 1000) > new Date()) {
      return true;
    }
    return false;
  }
  isInRole(roles: string): boolean {
    if (this.isAuthenticated()) {
      //var claims = this.getClaims();
      var rolesLocal = this.roles();
      var rolesArray = roles.toLowerCase().split(',');
      for (let i = 0; i < rolesArray.length; i++) {
        if (rolesLocal.toLowerCase().split(',').indexOf(rolesArray[i]) > -1) {
          return true;
        }
      }
    }
    return false;
  }
}
export class Ticket {
  token: string;
  userName: string;
  roles: string[];
  rolesDescr: string[];
  userId: string;
}
export class Claims {
  given_name: string;
  exp: number;
  roles: string;
  rolesDescr: string;
}