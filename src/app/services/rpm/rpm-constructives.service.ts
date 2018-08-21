import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../models/common/responseModel';
import { RpmDeleteConstructive } from '../../pages/rpm/admin/rpm-constructives/rpm-constructives.component';

@Injectable()
export class RpmConstructivesService {

  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/RpmConstructives';
  }

  getConstructives(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/Constructives');
  }
  getFixConstructives(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/FixConstructives');
  }
  getPartConstuctives(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/PartsConstructives');
  }

  getAreaConstructives(id: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/Constructives/' + id);
  }
  DeleteConstructive(model: RpmDeleteConstructive): Observable<any> {
    return this.http.post(this.url + '/DeleteConstructive', model);
  }

  addConstructiveArea(model: Array<any>, id: string): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/SnapConstructives/' + id, model);
  }

  addConstructive(name: string, typeCheck: number): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/Add?nameConstructive=' + name + '&typeCheck=' + typeCheck, null);
  }
  addConstructiveRemark(model: ConstructiveRemarkAdd): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddConstructiveRemark', model);
  }
  updateConstructive(model: UpdateConstructive): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/UpdateConstructives', model);
  }

}

export class UpdateConstructive {
  Id: string;
  Name: string;
  TypeNum: number;
}

export class DeleteConstructive {
  Id: string;
  Name: string;
  TypeNum: number;
}

export class ConstructiveRemarkAdd {
  name: string;
  parentId: string;
  constructiveId: string;
}

export class ConfirmedModel {
  id: string;
}
