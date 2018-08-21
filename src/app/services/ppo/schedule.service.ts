import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../models/common/responseModel';

@Injectable()
export class ScheduleService {

  private url: string;


  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/ppo/Audit';
  }

  getEventList(start, end): Observable<any> {
    return this.http.get(this.url + '/GetAuditEvents?start=' + start + '&end=' + end);
  }

}

export class SendEventDate {
  start: string;
  end: string;
}

export class Event {
  start: string;
  end: string;
  title: string;
}