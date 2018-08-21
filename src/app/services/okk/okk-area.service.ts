import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { CnsArea } from '../cns/cns-area.service';
import { Nsi } from '../models/models';

@Injectable()
export class OkkAreaService {

  url = environment.apiUrl + 'api/okk/area/';
  constructor(private client: HttpService) { }

  areas(statusId: number, divisionId: string): Observable<CnsArea[]> {
    return this.client.get(this.url + '?statusId=' + statusId + '&divisionId=' + divisionId);
  }
  areaParts(areaId: string, typePart: number): Observable<OkkPart[]> {
    return this.client.get(this.url + 'AreaParts/' + areaId + '/' + typePart + '/2');
  }

  add(name: string, divisionId: string, statusId: number): Observable<boolean> {
    return this.client.post(this.url + 'Add/', { name, divisionId, statusId });
  }


}


export class Division {
  id: string;
  name: string;
  children: Division;
}

export class OkkPart {
  id: string;
  name: string;
  type: Nsi;
}
export class OkkAreaAdd {
  statusId: number;
  divisionId: string;
  name: string;
  descr: string;
}