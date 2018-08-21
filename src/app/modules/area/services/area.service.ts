import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../services/common/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class AreaService {
  url = environment.apiUrl + 'api/area/';
  constructor(private client: HttpService) { }

  areas(): Observable<any[]>   {
    return this.client.get<any[]>(this.url);
  }

  post(area: any) {
    return this.client.post<any>(this.url, area);
  }

  put(id: string, area: any) {
    return this.client.post<any>(this.url + id, area);
  }
  
  delete(id: string) {
    return this.client.delete(this.url + id);
  }
}
