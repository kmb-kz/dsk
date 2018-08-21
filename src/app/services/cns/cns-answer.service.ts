import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../common/http.service';
import { Nsi } from '../models/models';
import { File64 } from '../../pages/common/file/file.component';
import { ResponseModel } from './cns-partner.service';
import { MaterialVolume, MaterialVolumePost } from '../../pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-materials/cns-point-materials.component';

@Injectable()
export class CnsAnswerService {
  url = environment.apiUrl + 'api/cns/answer/';
  constructor(private client: HttpService) { }
  areaAnswers(areaId: string, partnerId: string, partId: string, fixed: boolean, schemeId: string): Observable<any[]> {
    return this.client.post(this.url + 'Last', { areaId, partnerId, partId, fixed, schemeId });
  }
  answers(id: string): Observable<CnsCheckOrder[]> {
    return this.client.get(this.url + 'standards/' + id);
  }
  answerSave(standardId: string, pointId: string, parameterId: string, answerTypeId: string): Observable<string> {
    return this.client.post(this.url, { standardId, pointId, parameterId, answerTypeId });
  }
  answer(id: string): Observable<CnsAnswer> {
    return this.client.get(this.url + id);
  }
  addImage(answerId: string, image: File64): Observable<string> {
    return this.client.post(this.url + 'image', { image, answerId });
  }

  removeImage(imageId: string): Observable<any> {
    return this.client.delete(this.url + 'image/' + imageId);
  }

  saveComment(answerId: string, comment: string): Observable<any> {
    return this.client.post(this.url + 'comment', { comment, answerId });
  }
  savePercentage(parameterId: string, percentage: number): Observable<ResponseModel<boolean>> {
    return this.client.put(this.url + 'percentage', { parameterId, percentage });
  }
  messageSend(answerId: string, message: string, image: File64): Observable<string> {
    return this.client.post(this.url + 'message', { answerId, message, image });
  }
  updateStageOfStandard(areaStandardId: string, stageId: string): Observable<ResponseModel<boolean>> {
    return this.client.put(this.url + 'stageOfStandard', { areaStandardId, stageId });
  }
  materialVolumes(parameterId: string): Observable<ResponseModel<MaterialVolume[]>> {
    return this.client.get(this.url + 'materialVolume/' + parameterId);
  }
  materialVolumePost(model: MaterialVolumePost): Observable<ResponseModel<MaterialVolume[]>> {
    return this.client.post(this.url + 'materialVolume', model);
  }
  materialVolumePut(model: MaterialVolume): Observable<ResponseModel<boolean>> {
    return this.client.put(this.url + 'materialVolume', { id: model.id, volume: model.volume });
  }
  materialRemove(id: string): Observable<ResponseModel<boolean>> {
    return this.client.post(this.url + 'removeMaterialVolume/' + id, null);
  }
}

export class CnsCheckOrder {
  checkOrder: number;
  standards: CnsCheckOrderStandard[];
}
export class CnsCheckOrderStandard {
  standard: Nsi;
  parameters: CnsCheckOrderStandardParameter[];
}
export class CnsCheckOrderStandardParameter {
  parameter: Nsi;
  percentage: number;
  answer: CnsAnswer;
}
export class CnsAnswer {
  id: string;
  comment: string;
  dateUpdated: string;
  images: Nsi[];
  answerType: Nsi;
  messages: CnsAnswerMessage[];
}
export class CnsAnswerMessage {
  id: string;
  date: Date;
  message: string;
  image: string;
  userId: string;
}