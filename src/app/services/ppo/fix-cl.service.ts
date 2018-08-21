import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { CheckListFix } from '../models/ppo/fixCL/checklistf.model';
import { HttpService } from '../common/http.service';
import { File64 } from '../../pages/common/file/file.component';
import { Statistic } from '../../pages/ppo/checklistdetail/checklistdetail.component';

@Injectable()
export class FixClService {

  private url: string;

  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/ppo/FixCL';
  }

  getItemsByParentId(answerListId: string): Promise<any> {
    return this.http.get(this.url + '/ItemsByParentId?answerListId=' + answerListId).toPromise();
  }

  getStatisticByParentId(answerListId: string, itemId: string): Promise<Statistic> {
    return this.http.get<Statistic>(this.url + '/StatisticByItem/' + answerListId + '/' + itemId).toPromise();
  }

  getFixCl(id: string, parentId: string, idFilter: number): Promise<CheckListFix> {

    return this.http.get<CheckListFix>(this.url + '?id=' + id + '&parentId=' + parentId + '&filter=' + idFilter).toPromise();
  }

  generateAnswers(answerListId: string): any {

    return this.http.get(this.url + '/generateAnswers?answerListId=' + answerListId);
  }

  setCheckFinished(answerListId: string): any {

    return this.http.get(this.url + '/checkFinished?id=' + answerListId);
  }
  setFinished(answerListId: string): any {

    return this.http.post(this.url + '/Finish?id=' + answerListId, {});
  }


  checkFinished(id: string): any {
    return this.http.get(this.url + '/CheckFinished?id=' + id);
  }

  finish(id: string): any {

    return this.http.post(this.url + '/Finish', { id: id });
  }

  dateCorected(ansId, dateValue, filesLetter?): Promise<any> {
    return this.http.post(this.url + '/DateCorrected',
      { answerItemId: ansId, dateOfCorrectedStr: dateValue, grLetterFile: filesLetter }).toPromise();
  }
  check(model: CheckPostModel): Promise<any> {
    return this.http.post(this.url + '/Check', model).toPromise();
  }

  loadHistory(itemId): Observable<any> {
    return this.http.get(this.url + '/histories/' + itemId);
  }

  cancelCheckList(answerItemId, checkListId, itemId): any {

    return this.http.post(this.url + '/CancelCheckList',
      JSON.stringify({ answerItemId: answerItemId, itemId: itemId, checkListId: checkListId }))
      ;
  }

  getComment(answerItemsId: string): any {
    return this.http.get(this.url + '/Comment?answerItemsId=' + answerItemsId);
  }
  getPhoto(id: string): any {
    return this.http.get(this.url + '/Photo?id=' + id);
  }

  getItemFix(answerId): Promise<any> {
    return this.http.get(this.url + '/GetItem?answerItemId=' + answerId).toPromise();
  }

  changePhoto(id: string, photo: Array<File64>): any {
    return this.http.post(this.url + '/ChangePhoto', { id: id, photo: photo });
  }


  removePhoto(id: string): any {

    return this.http.delete(this.url + '/RemovePhoto?photoId=' + id);
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



export class CheckPostModel {
  id: string = null;
  comment: string;
  answerTypeId: string;
  itemId: string;
  answerListId: string;
  files: File64[] = [];
  breakdownId: string;
}