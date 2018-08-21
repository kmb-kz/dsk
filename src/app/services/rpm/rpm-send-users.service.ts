import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ResponseModel } from '../models/common/responseModel';
import { ConfirmedModel } from './rpm-constructives.service';

@Injectable()
export class RpmSendUsersService {

  private url: string;
  private idObject: string;

  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/RpmSendUsers';

  }

  getUsers(): Observable<UserInfo[]> {
    return this.http.get(this.url);
  }
  getAreaUsers(areaId: string, type: number): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetUsers/' + areaId + '/' + type);
  }
  addUser(model: Array<ConfirmedModel>, areaId: string, type: number): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddUsers/' + areaId + '/' + type, model);
  }
  deleteUser(receiverId: string): Observable<any> {
    return this.http.delete(this.url + '/User/' + receiverId);
  }

}
export class UserInfo {
  Id: string;
  Name: string;
  Email: string;
}
