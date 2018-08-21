import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class RpmReportService {

  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/report/';
  }

  getStatActive(statusId: number): Observable<any[]> {
    return this.http.get(this.url + 'RemarkActive/' + statusId);
  }

  getRemarkInspectorYear(year: number): Observable<any[]> {
    return this.http.get(this.url + 'RemarkInspectors/' + year);
  }

  getInspectors(): Observable<any[]> {
    return this.http.get(this.url + 'Inspectors');
  }

  getInspectorRemarks(userId, startDate, endDate): Observable<any[]> {
    return this.http.get(this.url + 'GetRemarkInspector/' + userId + '/' + startDate + '/' + endDate);
  }

  getAreasRemarks(areas): Observable<any[]> {
    return this.http.post(this.url + 'GetAreasRemarks/', areas);
  }

  getCriticalRemarks(): Observable<any[]> {
    return this.http.get(this.url + 'CriticalRemars');
  }

  getGM(): Observable<any[]> {
    return this.http.get(this.url + 'GM');
  }

  getGMType(typeId: number): Observable<any[]> {
    return this.http.get(this.url + 'GMTypes/' + typeId);
  }

  getGM2(typeId: number): Observable<any[]> {
    return this.http.get(this.url + 'GM2/' + typeId);
  }
}
