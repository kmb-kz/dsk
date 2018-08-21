import { Injectable } from '@angular/core';
import { HttpService } from './common/http.service';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { ObjectsModel } from './models/objects/objectsModel';
import { ObjectsDetailModel } from './models/objects/objectsDetailModel';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from './models/common/responseModel';
import { File64 } from '../pages/common/file/file.component';
import { Nsi } from './models/models';
import { User } from './models/user';
import { UserList } from './models/UserList';
@Injectable()
export class ObjectsService {
  UserList: User[];
  private url: string;
  private urlObjects: string;
  private urlPartners: string;
  private urlPhotoUpload = environment.apiUrl + 'api/cmn/';

  constructor(private http: HttpService, private http2: Http) {
    this.url = environment.apiUrl + 'api/cmn/';
    this.urlObjects = environment.apiUrl + 'api/cmn/Object/';
    this.urlPartners = environment.apiUrl + 'api/partner/Partner';
  }

  searchResult(searchText: string, statusId: number): Observable<ResponseModel<any>> {
    return this.http.get(this.urlObjects + 'search?searchText=' + searchText + '&statusId=' + statusId);
  }

  getObjectsDetail(Id: string): Observable<ResponseModel<any>> {
    return this.http.get(this.urlObjects + Id);
  }

  getPartner(Id: string): Observable<ResponseModel<any>> {
    return this.http.get(this.urlPartners + '?AreaId=' + Id);
  }
  getLeaders(Id: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + 'Object/Leaders?objectId=' + Id);
  }
  getUsers(Id: string): Observable<ResponseModel<User[]>> {
    return this.http.get(this.url + 'Object/Users?objectid=' + Id);
  }
  byUser(userId: string): Observable<Nsi[]> {
    return this.http.get(this.urlObjects + 'ByUser/' + userId);
  }
  removeUserArea(areaId: string) {
    return this.http.delete(this.urlObjects + 'User/' + areaId);
  }
  addUser(userId: string, areaId: string, areaPartId: string, companyId: string): Observable<boolean> {
    return this.http.post(this.urlObjects + 'User', { userId, areaId, areaPartId, companyId });
  }
  uploadPhoto(photoUploads: File64, idObject: string) {
    let myHeaders = new Headers({
      'Authorization': 'Bearer ' + localStorage.getItem('tokenUser'),
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: myHeaders });
    return this.http2.post(this.urlPhotoUpload + 'Object/UploadPhoto',
      JSON.stringify({ photo: photoUploads, areaId: idObject }), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res = res.json();
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = '';
    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }
    return Observable.throw(message);
  }
}
