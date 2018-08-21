import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import { File64 } from '../pages/common/file/file.component';
import { environment } from '../../environments/environment';
import { HttpService } from './common/http.service';

@Injectable()
export class DataService {

  private apiUrl = environment.apiUrl + 'api';

  constructor(private http: HttpService) { }

  authUser(email, password): any {
    return this.http.post(this.apiUrl + '/Account/GenerateToken',
      { email: email, password: password });
  }


  getObjectDetailInfo(areaId): Promise<any> {
    return this.http.get(this.apiUrl + '/ppo/object/' + areaId).toPromise();
  }
  addAudit(grLetterId): any {
    return this.http.post(this.apiUrl + '/ppo/GrLetter/AddAudit',
      { grLetterId });
  }
  uploadAct(objectId, file): any {
    return this.http.post(this.apiUrl + '/ppo/Object/UploadAct',
      { objectId: objectId, file: file });
  }
  uploadCheckList(objectId, file): any {
    return this.http.post(this.apiUrl + '/ppo/Object/UploadCheckList',
      { objectId: objectId, file: file });
  }

  requestAudit(auditId): any {
    return this.http.post(this.apiUrl + '/ppo/GrLetter/RequestNewAudit',
      { auditId: auditId });
  }
  addAuditResult(auditId, isCorrect): any {
    return this.http.post(this.apiUrl + '/ppo/GrLetter/AddAuditResult',
      { auditId: auditId, answer: isCorrect });
  }
  getObjectLetterInfo(areaId): any {
    return this.http.get(this.apiUrl + '/ppo/GrLetter?objectId=' + areaId);
  }

  getUsers(role?): any {
    return this.http.get(this.apiUrl + '/Account/GetUsers?role=' + role);
  }

  getConstructive(): any {
    return this.http.get(this.apiUrl + '/Nsi/Constructives?moduleId=1');
  }

  getFreeCItemLList(checkListId): any {
    return this.http.get(this.apiUrl + '/ppo/FreeCL?id=' + checkListId);
  }

  getFreeCLComment(answerListId, itemId): any {
    return this.http.get(this.apiUrl + '/ppo/FreeCL/Comment?answerListId=' + answerListId + '&itemId=' + itemId);
  }





  /*Добавление ===============================================================*/


  setAppeointUser(idUser, auditInspectorId): any {
    return this.http.post(this.apiUrl + '/ppo/Object/AddAuditor',
      { auditInspectorId: auditInspectorId, userId: idUser });
  }



  setAddRemark(answerListId, FreeCLId, textRemark, constructiveId, IsCritical: boolean, files: Array<File64>, comment: string): any {
    return this.http.post(this.apiUrl + '/ppo/FreeCL/Remark',
      {
        AnswerListId: answerListId, FreeCLId: FreeCLId,
        Remark: textRemark, IsCritical: IsCritical, ConstructiveId: constructiveId,
        Files: files, comment: comment
      });
  }

  getItem(answerItemId): any {
    return this.http.get(this.apiUrl + '/ppo/FreeCL/GetItem?answerItemId=' + answerItemId);

  }

  setCompliesCheck(answerItemId, isCorrected, comment, files): any {
    return this.http.post(this.apiUrl + '/ppo/FreeCL/Check',
      {
        answerItemId: answerItemId,
        isCorrected: isCorrected,
        comment: comment,
        files: files
      });
  }


  setCheckListFinished(answerListId): any {
    return this.http.get(this.apiUrl + '/ppo/FreeCL/CheckFinished?answerListId=' + answerListId);
  }
  setCheckListFinish(answerListId): any {
    return this.http.get(this.apiUrl + '/ppo/FreeCL/Finish/' + answerListId);
  }

  setAddAuditRK(areaId, dateAudit): any {
    return this.http.post(this.apiUrl + '/ppo/object/AddAuditRK', { auditDate: dateAudit, objectId: areaId });
  }
  setAddAuditPK(areaId): any {
    return this.http.post(this.apiUrl + '/ppo/Object/AddAuditPK', { objectId: areaId });
  }

  setDateCorrectedFreeCl(ansId, dateValue, filesLetter): any {
    return this.http.post(this.apiUrl + '/ppo/FreeCL/SetDateCorrected',
      { answerItemId: ansId, dateOfCorrectedStr: dateValue, grLetterFile: filesLetter });
  }

  removePhoto(id: string): any {
    return this.http.delete(this.apiUrl + '/ppo/FreeCL/RemovePhoto?photoId=' + id);
  }

  changePhoto(id: string, photo: Array<File64>): any {
    return this.http.post(this.apiUrl + '/ppo/FreeCL/ChangePhoto', { id: id, photo: photo });
  }

  loadHistory(itemId): Observable<any> {
    return this.http.get(this.apiUrl + '/ppo/FreeCL/histories/' + itemId);
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
