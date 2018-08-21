import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../models/common/responseModel';
import { InvitationPostModel } from '../../pages/ppo/objectdetail/objectdetail.component';
import { HttpService } from '../common/http.service';

@Injectable()
export class ObjectService {

  private url: string;

  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/ppo/Object';
  }

  setObject(nameObject: string): any {
    return this.http.post(this.url, { name: nameObject, descr: "" });
  }

  getObjectList(searchTxt: string = ""): any {
    return this.http.get(this.url + '?searchTxt=' + searchTxt);
  }

  getConstructives(moduleId: number) {
    return this.http.get(environment.apiUrl + 'nsi/Constructives?moduleId=' + moduleId);
  }

  setGenerateFixCheckList(areaId: string, inspectorId: string) {
    return this.http.get(this.url + '/GenerateFixCheckList?inspectorAuditId=' + inspectorId + '&areaId=' + areaId);
  }

  sendInvitation(model: InvitationPostModel) {
    return this.http.post(environment.apiUrl + 'api/ppo/AuditInvitations', model);
  }
  getInvitations(areaId: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'api/ppo/AuditInvitations/GetInvitations?areaId=' + areaId);
  }

  setApproved(id, file, date, notes, status): Observable<any> {
    return this.http.post(environment.apiUrl + 'api/ppo/AuditInvitations/CheckInvitation',
      { Id: id, IsApproved: status, Files: file, Date: date, Notes: notes });
  }

  issetAreaStandart(id): Observable<any> {
    return this.http.get(this.url + '/CheckIssetStandart?areaId=' + id);
  }

  сancelAuditRK(model: CancelAudit): Observable<any> {
    return this.http.post(this.url + '/CancelAuditRK', model);
  }
}

export class CancelAudit {
  id: string;  //auditID
  comment: string;
  userId: string;
  areaId: string;
}