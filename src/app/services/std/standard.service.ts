import { Injectable, Version } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../models/models';
import { File64 } from '../../pages/common/file/file.component';
import { HttpService } from '../common/http.service';
import { Area } from './area.service';
import { ResponseModel } from '../cns/cns-partner.service';

@Injectable()
export class StandardService {
  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/std/standard/';
  }
  filter(filter: Filter): Observable<StandardResponse<Standard>> {
    return this.http.post(this.url + 'filter', filter);
  }
  delete(id: string): Observable<any>
  {
    return this.http.delete(this.url+id);
  }
  save(standard: StandardAdd) {
    return this.http.postVoid(this.url, standard);
  }
  get(id: string): Promise<Standard> {
    return this.http.get<Standard>(this.url + id).toPromise();
  }
  
  version(id:string):Observable<StandardVersion>{
    return this.http.get(this.url + 'version/' + id);
  }

  addParamter(model: ParameterPostModel):Observable<boolean>{
    return this.http.post(this.url + 'parameter', model); 
  }
  deleteParameter(id:string):Observable<any>{
    return this.http.delete(this.url+'parameter/'+id);
  }
  copy(srcConstructiveId:string, destConstructiveId:string, groupId:string):Observable<ResponseModel<boolean>>
  {
    return this.http.post(this.url + 'copy', {srcConstructiveId:srcConstructiveId, destConstructiveId:destConstructiveId, groupId:groupId});
  }

  updateStage(standardId:string, stageId:string) :Observable<ResponseModel<boolean>> {
    return this.http.put(this.url+'stage', {standardId, stageId});
  } 
}

export class Filter {
  id: string;
  page: number = 1;
  size: number = 15;
  number:string;
  total: number;
  title: string;
  constructiveId: string = null;
  areaId:string = null;
  classId:number = null;
  groupId:string = null;
  isActive:boolean= null;
  isConfirmed:boolean= null;
  stageId:string = null;
  isDeleted: boolean;
}
export class StandardAdd {
  groupId: string;
  title: string;
  number:string;
  constructiveId: string;
  description: string;
  regulationId: string;
  classIds: string; 
  parameters = new Array<any>();
  validImages = new Array<File64>();
  validImagesComment: string; 
  invalidImages = new Array<File64>();
  invalidImagesComment: string; 
  dateAccepted: string; 
  dateUpdated: string; 
}
export class StandardResponse<T> {
  results: T[];
  total: number;
}


export class Standard {
  id: string;
  number: string;
  title: string;
  description: string;
  constructive: Nsi;
  versions:StandardVersion[];
  areas:Promise<Area[]>;
  versionsCount: number; 
  requestsCount: number;
  stageId: string; 
  dateCreated: Date;
  isDeleted: boolean;
}
export class StandardVersion{
  description:string;
  dateCreated: Date;
  byDefault: boolean;
  id:string;
  status:Nsi;
  validImages:File64[];
  invalidImages:File64[];
  parameters:StandardParameter[];
 
}
export class StandardParameter{
  value:string;
  type:string;
  measurement:string;
  percentage: number;
}
export class ParameterPostModel {
  type: string = "-"; 
  value: string = "-";
  measurement: string = "-"; 
  versionId: string;  
}