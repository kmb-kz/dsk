import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../models/common/responseModel';
import { File64 } from '../../pages/common/file/file.component';
import { Nsi } from '../models/models';

@Injectable()
export class RpmAreaPartsService {

  private url: string;
  private urlCnsArea: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/RpmAreaParts';
    this.urlCnsArea = environment.apiUrl + 'api/cns/area';
  }

  addAreaParts(model: RpmAreaPartAdd): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddPart', model);
  }
  addAreaPart(model: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'api/cns/area/part', model);
  }
  editAreaParts(model: RpmAreaPartEdit): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/EditParts', model);
  }
  partInsert(part: any): Observable<string> {
    return this.http.post(this.url + '/part', part);
  }
  partDelete(id: string): Observable<any> {
    return this.http.delete(this.urlCnsArea + '/Part/' + id);
  }
  getAreaParts(areaId: string, partId: string): Observable<any> {
    return this.http.get(this.url + '/AreaParts?areaId=' + areaId + '&partId=' + partId);
  }

  getAreaPartConstructive(areaPartId: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetAreaPartConstructive/' + areaPartId);
  }

  snapConstructivesAreaPart(model: SnapConstructiveAreaPart): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddConstructive', model);
  }
}

export class RpmAreaPartEdit {
  id: string;
  areaId: string;
  nameParts: string;
  parentId: string;
}

export class RpmAreaPartAdd {
  areaId: string;
  cntEntrance: number;
  cntBlocks: number;
  cntFloor: number;
}
export class RpmAreaPartOneAdd {
  areaId: string;
  name: string;
  typeId: number;
}
export class RpmAreaEdit {
  id: string;
  name: string;
  descr: string;
  img: File64;
  llc: Nsi;
}
export class SnapConstructiveAreaPart {
  areaPartId: string;
  constructiveId: string;
}