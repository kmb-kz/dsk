import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Nsi } from '../models/models';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { NsiService } from '../nsi.service';

@Injectable()
export class TemplateService {
  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/std/template';
  }
  filter(filter: TemplateFilter):Observable<TemplateResponse>{
    return this.http.post(this.url + '/filter', filter);
  }
  save(model: any):Observable<boolean>{
    return this.http.post(this.url, model);
  }
  get(id:string): Observable<TemplateResponseModel>{
    return this.http.get(this.url + '/' + id);
  }
}
export class TemplateFilter{
  page:number = 1;
  size:number = 15;
  total:number;
  standardId:string;
  title:string;
}
export class TemplateResponse{
  results:TemplateResponseModel[];
  total:number;
}
export class TemplateResponseModel{
  id:string;
  title:string;
  dateCreated:Date;
  standards:TemplateResponseStandardModel[];
}
export class TemplateResponseStandardModel{
  id:string;
  title:string;
  constructiveId:string;
}