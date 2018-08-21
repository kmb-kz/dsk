import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../models/models';
import { ResponseModel } from '../models/common/responseModel';

@Injectable()
export class OkkStandardService {

  url = environment.apiUrl + 'api/okk/standard/';
  constructor(private client: HttpService) { }

  getAreaStages(areaId: string): Observable<Stages[]> {
    return this.client.get(this.url + 'Stages/' + areaId);
  }

  getAreaConstructives(areaId: string, stageId: string): Observable<Constructives[]> {
    return this.client.get(this.url + 'Constructives/' + areaId + '/' + stageId);
  }
  getAreaStandards(areaId: string, areaPartId: string, constructiveId: string, stageId: string): Observable<Standards[]> {
    return this.client.get(this.url + 'Standard/' + areaId + '/' + areaPartId + '/' + constructiveId + '/' + stageId);
  }

}


export class Stages {
  id: string;
  num: number;
  name: string;
  areaId: string;
  constructiveId: string;
}

export class Stages2 {
  id: number;
  areaId: string;
}

export class Constructives {
  id: string;
  name: string;
}
export class Standards {
  id: string;
  dateCreated: Date;
  title: string;
  description: string;
  number: string;
  constructive: Constructives;
  constructiveId: string;
  stageId:string;
  parameters: Parameters[] = new Array<Parameters>();
}
export class Parameters {
  versionId: string;
  type: string;
  value: string;
  measurement: string;
  answers: OkkAnswers;
  parameterId: string;
  areaStandardId: string;

}
export class OkkAnswers {
  id: string;
  comment: string;
  dateUpdated: Date;
  parameterId: string;
  areaPartId: string;
  answerType: Nsi;
  images: Nsi;
  standardStatus: Nsi;
  cntRemarkAnswers: number;
  photoUrl: string[];
}