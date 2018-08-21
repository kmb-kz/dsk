import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { RpmObject, RpmAddObject, LLC } from '../models/rpm/rpm-object.model';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../models/common/responseModel';
import { RpmAreaEdit } from './rpm-area-parts.service';

@Injectable()
export class RpmObjectService {

  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/object';
  }

  objectList(): Observable<RpmObject[]> {
    return this.http.get<RpmObject[]>(this.url);
  }
  setObject(llc: string, name: string, descr: string): Observable<string> {
    return this.http.post(this.url + '/AddArea', { LLC_Id: llc, name: name, descr: descr });
  }
  getFullInfo(id: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetAreaInfo?areaId=' + id);
  }
  getObjects(searchText: string, sortType: number): Observable<RpmObject[]> {
    return this.http.get(this.url + '?searchText=' + searchText + '&sortType=' + sortType);
  }
  updateObject(model: RpmAreaEdit): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/EditArea', model);
  }
  getLLC(): Observable<LLC[]> {
    return this.http.get(this.url + '/LLC');
  }

  addLLC(model: LLC): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddLLC', model);
  }

  editLLC(model: LLC): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/EditLLC', model);
  }
  removeLLC(Id: string): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/RemoveLLC/' + Id, null);
  }

  getDetourArea(areaId: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetDetourArea/' + areaId);
  }
  addDetourArea(areaId: string): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddDetourArea/' + areaId, null);
  }
  getAreaUsers(areaId: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/AreaUsers?areaId=' + areaId);
  }

}

export class Llc {
  id: string;
  name: string;
  descr: string;
}


