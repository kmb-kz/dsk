import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { File64 } from '../../pages/common/file/file.component';
import { Nsi } from '../models/models';
import { ResponseModel } from '../models/common/responseModel';

@Injectable()
export class OkkAnswerService {

  url = environment.apiUrl + 'api/okk/okkAnswers/';
  constructor(private client: HttpService) { }

  getAreaStandard(areaId: string, versionId: string): Observable<AreaStandard> {
    return this.client.get(this.url + 'AreaStandart/' + areaId + '/' + versionId);
  }

  addAnswer(model: AddAnswer): Observable<any> {
    return this.client.post(this.url, model);
  }

  getAnswer(answerId: string, statusAnswer: number): Observable<any> {
    return this.client.get(this.url + 'GetAnswer/' + answerId + '/' + statusAnswer);
  }

  getRemarks(answerId: string): Observable<any> {
    return this.client.get(this.url + 'GetRemarks/' + answerId);
  }

  setChecked(model: Corrected): Observable<any> {
    return this.client.post(this.url + 'AnswerItem', model);
  }
  getAnswerItem(answerItemId: string): Observable<any> {
    return this.client.get(this.url + 'GetAnswerItem/' + answerItemId);
  }
  getInfoPartPause(id: string): Observable<ResponseModel<any>> {
    return this.client.get(this.url + 'GetPausePart/' + id);
  }

  setAreaPartPause(model: PausePart): Observable<any> {
    return this.client.post(this.url + 'PausePart', model);
  }
  isFinishStage(areaPartId: string, stageId: string): Observable<ResponseModel<any>> {
    return this.client.post(this.url + 'IsFinishStage/' + areaPartId + '/' + stageId, null);
  }
  checkFinishedStage(areaPartId: string, stageId: string): Observable<boolean> {
    return this.client.get(this.url + 'CheckFinishedStage/' + areaPartId + '/' + stageId);
  }

  finishApartment(areaPartId: string): Observable<ResponseModel<any>> {
    return this.client.post(this.url + 'IsFinishApartment/' + areaPartId, null);
  }

}
export class AddAnswer {
  areaStandardId: string;
  parameterId: string;
  areaPartid: string;
  remarkStatusId: number;
  answerTypeId: number;
  comment: string;
  files: File64[] = [];
  typeWork: number;
  stageId: string;
  startDate: Date;
}
export class AreaStandard {
  id: string;
}
export class Remarks {
  id: string;
  answerId: string;
  comment: string;
  answerType: Nsi;
  dateCreated: Date;
  dateUpdated: Date;
  images: Images[] = [];
}

export class Images {
  id: string;
  url: string;
}


export class Corrected {
  id: string;
  comment: string;
  answerTypeId: number;
  images: Images[] = [];
}
export class PausePart {
  id: string;
  comment: string;
  endDatePause: Date;
  areaPartid: string;
  removedPause: boolean;
}