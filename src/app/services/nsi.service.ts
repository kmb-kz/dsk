import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Nsi } from './models/models';
import { ResponseModel } from './models/common/responseModel';
import { Division } from './okk/okk-area.service';

@Injectable()
export class NsiService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'Nsi/';
  }

  private _groups: Promise<Nsi[]>;
  groups(): Promise<Nsi[]> {
    if (!this._groups)
      this._groups = this.http.get<Nsi[]>(this.url + 'Groups').toPromise();
    return this._groups;
  }

  private _divisions: Promise<Division[]>;
  divisions(): Promise<Division[]> {
    if (!this._divisions) {
      this._divisions = this.http.get<Division[]>(this.url + 'Division').toPromise();
    }
    return this._divisions;
  }

  private _partners: Promise<Nsi[]>;
  partners(): Promise<Nsi[]> {
    if (!this._partners)
      this._partners = this.http.get<Nsi[]>(this.url + 'Partners').toPromise();
    return this._partners;
  }
  auditTypes(): Observable<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'AuditTypes');
  }
  areaParts(areaId: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'AreaParts/' + areaId).toPromise();
  }
  companies(areaPartId: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'Companies/' + areaPartId).toPromise();
  }
  arepartPartners(partId: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'AreaPartPartners/' + partId).toPromise();
  }
  contracts(partnerId: string, partId: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'Contracts/' + partnerId + "/" + partId).toPromise();
  }
  contractConstructives(contractId: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'ContractConstructives/' + contractId).toPromise();
  }
  private _areaPartTypes: Promise<Nsi[]>;
  areaPartTypes(): Promise<Nsi[]> {
    if (!this._areaPartTypes)
      this._areaPartTypes = this.http.get<Nsi[]>(this.url + 'AreaPartTypes').toPromise();
    return this._areaPartTypes;
  }
  materials(): Observable<ResponseModel<Nsi[]>> {
    return this.http.get<ResponseModel<Nsi[]>>(this.url + 'materials');
  }
  addMaterial(model: Nsi): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'material', model);
  }
  removeMaterial(model: Nsi): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'RemoveMaterial', model);
  }
  editMaterial(model: Nsi): Observable<boolean> {
    return this.http.put<boolean>(this.url + 'material', model);
  }
  remarkBreakdown(statusId: number): Observable<ResponseModel<Nsi[]>> {
    return this.http.get<ResponseModel<Nsi[]>>(this.url + 'Breakdown/' + statusId);
  }
  addRemarkBreakdown(name: string, statusId: number): Observable<ResponseModel<boolean>> {
    return this.http.post<ResponseModel<boolean>>(this.url + 'Breakdown', { name: name, areaStatusId: statusId });
  }


  private _classes: Promise<Nsi[]>;
  classes(): Promise<Nsi[]> {
    if (!this._classes)
      this._classes = this.http.get<Nsi[]>(this.url + 'Classes').toPromise();
    return this._classes;
  }
  private _contructives: Promise<any[]>;
  constructives(force?: boolean): Promise<any[]> {
    if (!this._contructives || force)
      this._contructives = this.http.get<any[]>(this.url + 'Constructives').toPromise();
    return this._contructives;
  }
  private _regulations: Promise<Nsi[]>;
  regulations(): Promise<Nsi[]> {

    {
      this._regulations = this.http.get<Nsi[]>(this.url + 'Regulations').toPromise();
      this._regulations.then(x => console.info(x));
    }
    return this._regulations;
  }
  private _contructivesTree: Promise<any[]>;
  constructivesTree(force: boolean = false): Promise<any[]> {
    if (!this._contructivesTree || force)
      this._contructivesTree = this.http.get<any[]>(this.url + 'ConstructivesTree').toPromise();
    return this._contructivesTree;
  }
  private _contructivesTreeTable: Promise<any[]>;
  constructivesTreeTable(areaId, cnstrTxt, force: boolean = false): Promise<any[]> {
    if (!this._contructivesTreeTable || force)
      this._contructivesTreeTable = this.http.get<any[]>(this.url + 'ConstructivesTreeTable?areaId=' + areaId + '&cnstrTxt=' + cnstrTxt).toPromise();
    return this._contructivesTreeTable;
  }
  constractiveStandards(id: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'ConstructiveStandards/' + id).toPromise();
  }
  standardVersions(id: string): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'StandardVersions/' + id).toPromise();
  }
  templates(): Promise<Nsi[]> {
    return this.http.get<Nsi[]>(this.url + 'Templates').toPromise();
  }
  private _stdPArameterTypes: Promise<Nsi[]>;
  stdParameterTypes(): Promise<Nsi[]> {
    if (!this._stdPArameterTypes)
      this._stdPArameterTypes = this.http.get<Nsi[]>(this.url + 'StandardParameterTypes').toPromise();
    return this._stdPArameterTypes;
  }
  private _criticalites: Promise<Nsi[]>;
  criticalites(): Promise<Nsi[]> {
    if (!this._criticalites)
      this._criticalites = this.http.get<Nsi[]>(this.url + 'Criticalites').toPromise();
    return this._criticalites;
  }
  private _statusBuilding: Promise<Nsi[]>
  statusBuilding(): Promise<Nsi[]> {
    if (!this._statusBuilding)
      this._statusBuilding = this.http.get<Nsi[]>(this.url + 'AreaStatuses').toPromise();
    return this._statusBuilding;
  }



}
