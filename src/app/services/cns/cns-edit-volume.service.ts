import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {HttpService} from '../common/http.service';

import {Observable} from 'rxjs/Observable';
import {DictionaryModel} from '../models/cns/cnsDictionaryModel';
import {ConstructiveModel} from '../models/cns/cnsConstructiveModel';

@Injectable()
export class CnsEditVolumeService {

  private url: string;

  constructor(private httpClient: HttpClient, private service: HttpService) {
    this.url = environment.apiUrl + 'api/cns/CnsMaterialCosts';
  }

  getConstructives(): Observable<ConstructiveModel[]> {
    const myUrl = this.url + '/GetConstructives';
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.get(myUrl, {headers: myHeaders});
  }

  getMKeys(): Observable<DictionaryModel[]> {
    const myUrl = this.url + '/GetMKeys';
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.get(myUrl, {headers: myHeaders});
  }

  getMaterials(): Observable<DictionaryModel[]> {
    const myUrl = this.url + '/GetMaterials';
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.get(myUrl, {headers: myHeaders});
  }

  getMaterialCosts(): Observable<MaterialCostsModel[]> {
    const myUrl = this.url;
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.get(myUrl, {headers: myHeaders});
  }

  saveMaterialCosts(requestView: MaterialCostsAddModel): Observable<MaterialCostsModel> {
    const myUrl = this.url + '/SaveMaterialCost';
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.post(myUrl, requestView, {headers: myHeaders});
  }

  updateMaterialCosts(requestView: MaterialCostsUpdateModel): Observable<MaterialCostsModel> {
    const myUrl = this.url + '/UpdateMaterialCost';
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.post(myUrl, requestView, {headers: myHeaders});
  }

  deleteMaterialCosts(id: string): Observable<MaterialCostsModel> {
    const myUrl = this.url + "/DeleteMaterialCost?Id=" + id;
    let params = new HttpParams().set('model', id);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.delete(myUrl,  {headers: myHeaders});
  }
  getConstructiveTypes(constructiveId: string): Observable<DictionaryModel[]> {
    const myUrl = this.url + '/GetConstructiveTypes?constructiveId=' + constructiveId;
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.get(myUrl, {headers: myHeaders});
  }
}

export class MaterialCostsModel {
  id: string;
  materialId: string;
  materialName: string;
  constructiveId: string;
  constructiveName: string;
  constructiveTypeId: string;
  constructiveTypeName: string;
  mKeyId: string;
  mKeyName: string;
  costs: string;
}

export class MaterialCostsAddModel {
  MaterialId: string;
  ConstructiveId: string;
  ConstructiveTypeId: string;
  MKeyId: string;
  Costs: string;
}

export class MaterialCostsUpdateModel {
  Id: string;
  MaterialId: string;
  ConstructiveId: string;
  ConstructiveTypeId: string;
  MKeyId: string;
  Costs: string;
}


