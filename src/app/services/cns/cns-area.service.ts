import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Nsi } from '../models/models';
import { File64 } from '../../pages/common/file/file.component';
import { ResponseModel } from './cns-partner.service';

@Injectable()
export class CnsAreaService {
  url = environment.apiUrl + 'api/cns/area/';
  constructor(private client: HttpService) { }
  areas(): Observable<CnsArea[]> {
    return this.client.get(this.url);
  }
  add(name: string, statusId: number): Observable<boolean> {
    return this.client.post(environment.apiUrl + 'api/cmn/object/add', { name, statusId: statusId });
  }
  areasTree(): Observable<CnsArea[]> {
    return this.client.get(this.url + 'areastree/');
  }
  area(id: string): Observable<CnsArea> {
    return this.client.get(this.url + id);
  }
  removeArea(id: string): Observable<ResponseModel<boolean>> {
    return this.client.post(this.url + 'RemoveArea/' + id, null);
  }
  areaParts(areaId: string, partId: string): Observable<CnsPart[]> {
    return this.client.get(this.url + 'areaparts?' + (areaId ? 'areaId=' + areaId : 'areaId=')
      + (partId ? '&partId=' + partId : ''));
  }
  part(id: string): Observable<CnsPart> {
    return this.client.get(this.url + 'part/' + id);
  }
  partDelete(id: string): Observable<string> {
    return this.client.delete(this.url + 'part/' + id);
  }
  partUpdate(part: any): Observable<string> {
    return this.client.putVoid(this.url + 'part', part);
  }
  partInsert(part: any): Observable<string> {
    return this.client.post(this.url + 'part', part);
  }
  partSchemes(id: string): Observable<CnsScheme[]> {
    return this.client.get(this.url + 'schemes/' + id);
  }
  breadcrumbs(id: string): Observable<CnsPart[]> {
    return this.client.get(this.url + 'partBreadcrumbs/' + id);
  }
  scheme(id: string): Observable<CnsScheme> {
    return this.client.get(this.url + 'scheme/' + id);
  }
  schemePost(scheme: any): Observable<string> {
    return this.client.post(this.url + 'scheme', scheme);
  }
  pointPost(point: any): Observable<string> {
    return this.client.post(this.url + 'point', point);
  }
  pointDelete(id: string): Observable<string> {
    return this.client.delete(this.url + 'point/' + id);
  }
  pointRestore(id: string): Observable<string> {
    return this.client.get(this.url + 'point/' + id + '/restore');
  }
  point(id: string): Observable<CnsPoint> {
    return this.client.get(this.url + 'point/' + id);
  }
  points(schemeId: string): Observable<CnsPoint[]> {
    return this.client.get(this.url + 'points/' + schemeId);
  }
  techCards(areaId: string): Observable<TechCard[]> {
    return this.client.get(this.url + 'techcards/' + areaId)
  }
  techCard(id: string): Observable<TechCard> {
    return this.client.get(this.url + 'techcard/' + id);
  }
  saveTechCard(model: TechCardPost) {
    return this.client.post(this.url + 'techcard', model);
  }
  removeTechCard(id: string) {
    return this.client.delete(this.url + 'techcard/' + id);
  }
  setManager(areaPartId: string, userId: string) {
    return this.client.postVoid(environment.apiUrl + 'api/okk/area/managers/' + areaPartId + '/' + userId, {});
  }
  getManager(areaPartId: string) {
    return this.client.get(environment.apiUrl + 'api/okk/area/managers/' + areaPartId);
  }
  managers(): Observable<any[]> {
    return this.client.get(environment.apiUrl + 'api/okk/area/managers/managers');
  }
}

export class CnsArea {
}

export class CnsPart {
  id: string;
  name: string;
  typeId: string;
  typeName: string;
  fixed: number;
  notMatches: number;
}
export class CnsScheme {
  id: string;
  notMatches: number;
  fixed: number;
  schemeUrl: string;
  title: string;
  height: number;
  width: number;
}
export class CnsPoint {
  number: number;
  pointX: number;
  pointY: number;
  constructive: Nsi;
  schemeId: string;
  id: string;
  answers: number;
  checkListCount: number;
  fixed: number;
  notMatches: number;
  deleted: boolean;
}

export class TechCard {
  id: string;
  area: Nsi;
  title: string;
  url: string;
  urlStrip: string;
  urlHtml: string;
}
export class TechCardPost {
  areaId: string;
  title: string;
  url: string;
}