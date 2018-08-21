import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../models/common/responseModel';
import { HttpService } from '../common/http.service';
import { Nsi } from '../models/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CnsVisitLogService {
  url = environment.apiUrl + 'api/cns/acc/';
  constructor(private client: HttpService) { }

  get(start: string, end: string, contractId: string): Observable<ResponseModel<EventCalendar[]>> {
    return this.client.get(this.url + 'oper/visitLogs?dateStart=' + start + '&dateFinish=' + end + '&contractId=' + contractId);
  }
  forOne(start: string, end: string, contractId: string): Observable<ForOne> {
    return this.client.get(this.url + 'oper/forOne?dateStart=' + start + '&dateFinish=' + end + '&contractId=' + contractId);
  }
  getVisit(areaPartId, constructiveId, date = null): Observable<ResponseModel<VisitLog[]>> {
    return this.client.get(this.url + 'oper/visitLog/' + areaPartId + '/' + constructiveId + '/' + date);
  }

  setLogVisit(areaPartId, log: VisitLog, date = null): Observable<ResponseModel<boolean>> {
    return this.client.post(this.url + 'oper/setVisitLog/', { partnerId: log.partner.id, areaPartId: areaPartId, contractId: log.contract.id, countBuilders: log.countBuilders, isHoliday: log.isHoliday, isWeatherReason: log.isWeatherReason, date });
  }

  store(contractId: string): Observable<AccStore[]> {
    return this.client.get(this.url + 'storenew/' + contractId);
  }
  storeStep(contractId: string, number: number): Observable<any[]> {
    return this.client.get(this.url + 'storenew/' + contractId + "/step/" + number);
  }
  m29(contractId: string): Observable<any[]> {
    return this.client.get(this.url + 'm29/' + contractId);
  }
  certificates(contractId: string): Observable<any[]> {
    return this.client.get(this.url + 'cert/contractCertificates/' + contractId);
  }
  certificatePost(certificate: any): Observable<any> {
    return this.client.post(this.url + 'cert', certificate);
  }
  certificatePut(certificate: any): Observable<string> {
    return this.client.putVoid(this.url + 'cert', certificate);
  }
  certificateDelete(certificateId: string): Observable<string> {
    return this.client.delete(this.url + 'cert/' + certificateId);
  }
  certificate(id: any): Observable<any> {
    return this.client.get(this.url + 'cert/' + id);
  }
  contractConstructives(id: any): Observable<any[]> {
    return this.client.get(this.url + 'cert/ContractConstructives/' + id);
  }
}
export class AccStore {
  id: string; 
  name: string; 
  number: number; 
  months: any[]; 
  monthsSize: number;
  factTotal: number; 
  planTotal: number; 
}
export class VisitLog {
  id: string;
  areaPart: Nsi;
  partner: any;
  contract: any;
  constructive: Nsi;
  date: Date;
  isHoliday: boolean;
  isWeatherReason: boolean;
  countBuilders: number;

}

export class EventCalendar {
  id: string;
  titleHtml: string;
  start: string;
  end: string;
}

export class ForOne {
  volumeForOne: number;
  countWeatherReasons: number;
  countHolidays: number;
}

export class CertDocument {
  areaName: string;
  companyCustomer: string;
  companySupplier: string;
  contractTitle: string;
  dateCreated: Date;
  dateEnd: Date;
  dateStart: Date;
  id: string;
  name: string;
  signers: CertDocumentSigners[];
  parameters: CertDocumentParameter[];
}

export class CertDocumentParameter {
  cost: number;
  measurement: string;
  measurementStrip: string;
  name: string;
  stageName: string;
  standardName: string;
  value: number;
}
export class CertDocumentSigners {
  accountName: string;
  fullName: string;
  id: string;
  positionId: number;
}