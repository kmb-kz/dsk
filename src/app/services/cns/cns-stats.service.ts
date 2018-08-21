import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CnsStatsService {
  url = environment.apiUrl + 'api/cns/stats/';
  constructor(private http: HttpService) { }
  areapart(areaId: string, partId: string): Observable<any[]> {
    return this.http.get(this.url + 'areaparts/' + (areaId || '') + '/' + (partId || ''));
  }
  parameter(areaId: string): Observable<any[]> {
    return this.http.get(this.url + 'parameters/' + (areaId || ''));
  }
  partner(areaId: string): Observable<any[]> {
    return this.http.get(this.url + 'partners/' + (areaId || ''));
  }
}
