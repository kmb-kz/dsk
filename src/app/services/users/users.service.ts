import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdUserInfo } from '../models/AdUserInfo';
import { ResponseCl } from '../models/responseCl';
import { User } from '../models/user';
import { ResponseModel } from '../models/common/responseModel';
import { HttpService } from "../common/http.service";
import { Nsi } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsersService {

  private url: string;

  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/Account';
  }

  getAllUsers(searchTxt: string): Observable<any> {
    const myurl = this.url + '/Search?searchTxt=' + searchTxt;
    return this.http.get(myurl);
  }
  getByRoles(role: string): Observable<any> {
    return this.http.get(this.url + '/GetUsers?role=' + role);
  }
  searchFromAD(accountName: string): Observable<AdUserInfo[]> {
    const myurl = this.url + '/SearchFromAd?accountName=' + accountName;
    // const httpParams = new HttpParams().set('accountName', accountName);
    return this.http.get<AdUserInfo[]>(myurl);
  }

  getProfile(): Observable<any> {

    const myurl = this.url + '/ProfileGet';
    return this.http.get<any>(myurl);
  }
  changeprofile(profile: ProfileModel): Observable<any> {

    return this.http.post(this.url + '/Profile', profile);
  }

  searchFromFIO(searchValue: string): Observable<AdUserInfo[]> {
    const myurl = this.url + '/SearchFromAdByValue?searchValue=' + searchValue;
    // const httpParams = new HttpParams().set('accountName', accountName);
    return this.http.get<AdUserInfo[]>(myurl);
  }
  removeRole(userId: string, roleId: string) {
    return this.http.post(this.url + '/UserRoles/' + userId + '/' + roleId, null);
  }
  userRoles(userId: string): Observable<any> {
    return this.http.get(this.url + '/UserRoles/' + userId);
  }
  getAllADUsers(): Observable<AdUserInfo[]> {
    const myurl = this.url + '/GetAllADUsers';
    // const httpParams = new HttpParams().set('accountName', accountName);
    return this.http.get<AdUserInfo[]>(myurl);
  }

  addUserFromAD(accountName: string, roleId: string): Observable<any> {
    const myurl = this.url + '/AddUser?roleId=' + roleId;
    return this.http.post(myurl, { accountName: accountName });
  }
  addUserPartner(user: AdUserInfo) {
    const myurl = this.url + '/AddUserPartner';
    return this.http.post(myurl, user);
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = '';

    if (error instanceof Response) {
      const errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
    } else {
      message = error.message ? error.message : error.toString();
    }
    return Observable.throw(message);
  }

  getRoleList(): Observable<ResponseCl> {
    const myurl = this.url + '/RoleList';
    return this.http.get<ResponseCl>(myurl);
  }

  editUser(user: User, roleId: string): Observable<any> {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const myurl = this.url + '/EditUser';
    let request = {
      userId: user.id,
      email: user.email,
      phoneNumber: user.phoneNumber,
      roleId: roleId,
      lastName: user.lastName,
      firstName: user.firstName,
      patronumic: user.patronumic,
      userName: user.userName,
      password: user.password
    }
    return this.http.post(myurl, request);
  }

  userActivateDeactivate(userId: string): Observable<any> {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const myurl = this.url + '/UserActivateDeactivate?userId=' + userId;
    const urlSearch = new URLSearchParams();
    urlSearch.append('userId', userId);
    return this.http.post(myurl, { headers: myHeaders });
  }

  changePassword(userId: string, newPassword: string) {
    const myurl = this.url + '/ChangePassword';
    const rec = {
      id: userId,
      newPassword: newPassword
    }
    return this.http.post(myurl, rec);
  }

}

export class RequestEditUser {
  Email: string;
  UserId: string;
  PhoneNumber: string;
  RoleId: string;
}
export class ProfileModel {
  name: string;
  secondName: string;
  password: string;
  confirmPassword: string;
  oldPassword: string;
}