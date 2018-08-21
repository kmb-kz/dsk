import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../models/models';

@Injectable()
export class FreeClService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'api/ppo/freecl';
  }

  get(id: string): Observable<Checklist> {
    return this.http.get<Checklist>(this.url + '?id=' + id);
  }


}


export class ChecklistItem {
  id: string;
  isCritical: boolean;
  dateCreated: Date;
  remark: string;
  constructive: Nsi;
  answers: any[];
}

export class Checklist {
  object: Nsi;
  filterStatus: 1;
  id: string;
  dateCreated: Date;
  items = new Array<ChecklistItem>()
}
