import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Nsi } from '../models/models';
import { File64 } from '../../pages/common/file/file.component';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../models/common/responseModel';

@Injectable()
export class RpmFixChecklistService {

  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/RpmFixCL/';
  }

  getAnswers(areaId: string, constructiveId: string, detour: number): Promise<any> {
    return this.http.get(this.url + 'GetAnswers/' + areaId + '/' + constructiveId + '/' + detour).toPromise();
  }

  setAnswers(model: RpmCheckPostModel): Promise<any> {
    return this.http.post(this.url, model).toPromise();
  }

  getDetour(areaId: string): any {
    return this.http.get(this.url + 'GetDetour/' + areaId);
  }
  changeDetour(idDetour): Observable<any> {
    return this.http.post(this.url + 'ChangeDetour/' + idDetour, null);
  }
  getItem(itemId: string): Observable<FixCLItems> {
    return this.http.get(this.url + 'GetItem?answerItemId=' + itemId);
  }

}


export class FixCl {
  areaId: string;
  areaPartId: string;
  constructive: Nsi;
  detourAreaId: number;
  items: FixCLItems[];
}

export class FixCLItems {
  constructive: Nsi;
  childrens: FixCLItems[];
  answers: FixCLAnswer;
}

export class FixCLAnswer {
  id: string;
  answerId: string;
  answerType: number;
  comment: string;
  dateCreated: Date;
  dateUpdated: Date;
  images: File64[];
}


export class RpmCheckPostModel {
  areaId: string;
  comment: string;
  answerTypeId: string;
  areaPartId: string;
  constructiveId: string;
  files: File64[] = [];
}