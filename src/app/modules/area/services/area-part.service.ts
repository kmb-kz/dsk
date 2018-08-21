import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../services/common/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class AreaPartService {
  url = environment.apiUrl + 'api/area/part/';
  constructor(private client: HttpService) { }

  areaParts(moduleId: number, areaId?: string, parentId?: string): Observable<any[]> {
    return this.client.get<any[]>(this.url + `${moduleId}/${areaId}/${parentId}`);
  }

  get(id: string): Observable<any> {
    return this.client.get<any>(this.url + id);
  }

  post(model: any) {
    return this.client.post<string>(this.url, model);
  }

  put(id: string, part: any) {
    return this.client.postVoid(this.url + id, part);
  }

  delete(id: string) {
    return this.client.delete(this.url + id);
  }
}
