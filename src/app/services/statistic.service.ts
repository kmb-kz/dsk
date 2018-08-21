import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ResponseModel } from './models/common/responseModel';
import { HttpService } from './common/http.service';

@Injectable()
export class StatisticService {

  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/ppo';
  }

  getStatistics(id: string): Promise<any> {
    
    return this.http.get(this.url + '/Audit/Statistics?answerListId=' + id+'&checklistType=1').toPromise();
  }


}
