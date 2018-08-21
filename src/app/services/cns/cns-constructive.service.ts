import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../models/common/responseModel';

@Injectable()
export class CnsConstructiveService {

  url = environment.apiUrl + 'nsi/';

  constructor(private client: HttpService) { }

  saveVolume(constructiveId: string, volume: number): any {
    return this.client.put(this.url + 'ConstructiveVolume', { constructiveId, volume });
  }
  addChild(model: Constructive): any {
    return this.client.post(this.url + 'ConstructiveVolume', { name: model.name, volume: model.volume, id: model.id });
  }
  getStages(constructiveId: string): Observable<ResponseModel<Stage[]>> {
    return this.client.get(this.url + 'stages/' + constructiveId);
  }
  addStage(model: Stage): Observable<boolean> {
    return this.client.post(this.url + 'stage', model);
  }
  removeConstructive(id: string): Observable<boolean> {
    return this.client.post(this.url + 'RemoveConstructive/' + id, null);
  }

}

export class Constructive {
  id: string;
  name: string;
  volume: number;
}

export class Stage {
  id: string;
  number: number;
  name: string;
  constructiveId: string;
}