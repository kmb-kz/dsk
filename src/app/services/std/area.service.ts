import { Injectable, Version } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Nsi } from '../models/models';
import { HttpService } from '../common/http.service';
import { Filter, StandardResponse, Standard } from './standard.service';

@Injectable()
export class AreaService {
  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/std/area/';
  }
  modules(): Observable<Nsi[]>{
    return this.http.get<Nsi[]>(this.url + 'modules');
  }
  areas(searchTxt: string): Observable<Area[]> {
    return this.http.get<Area[]>(this.url + 'areas?searchTxt=' + searchTxt);
  }

  area(id: string): Observable<Area> {
    return this.http.get<Area>(this.url + id);
  }
  change(model: any): Observable<string> {
    return this.http.post(this.url + 'standard/change', model);
  }
  standards(id: string): Observable<AreaConstructive[]> {
    return this.http.get<AreaConstructive[]>(this.url + 'standards/' + id);
  }
  standard(id: string): Observable<AreaStandard> {
    return this.http.get<AreaStandard>(this.url + 'standard/' + id);
  }
  delete(id: string) {
    return this.http.delete(this.url + id);
  }
  restore(id: string) {
    return this.http.putVoid(this.url + id, {});
  }
  add(areaId: string, versionId: string) {
    return this.http.post(this.url, { areaId, versionId });
  }
  areasByVersion(id: string): Observable<Area[]> {
    return this.http.get(this.url + 'areasByVersion/' + id);
  }
  versionRequests(filter: Filter): Observable<StandardResponse<VersionRequest>> {
    return this.http.post(this.url + 'requests', filter);
  }
  import(areaId: string, groupId: string, moduleId: number) {
    return this.http.post(this.url + 'import', { areaId, groupId, moduleId });
  }
  importGroup(areaId: string, groupId: string, moduleId: number) {
    return this.http.post(this.url + 'importGroup', { areaId, groupId, moduleId });
  }
}
export class Area {
  id: string;
  name: string;
  description: string;
  standardCount: number;
  areaParts: Nsi[];
}
export class AreaConstructive {
  constructiveId: string;
  constructiveName: string;
  standards: AreaStandard[];
}

export class AreaStandardAdd {
  areaId: string; constructiveId: any;

  versionId: string;
}
export class AreaStandard {
  id: string;
  standardId: number;
  constructiveId: string;
  versionId: string;
  title: string;
  description: string;
  validImages: string[];
  invalidImages: string[];
  parameters: Nsi[];
  dateCreated: Date;
  deleted: boolean;
  changeRequestStatus: string;
}


export class VersionRequest {
  area: Area;
  standard: Standard;
  proposedVersion: Version;
  status: Nsi;
  dateRequested: Date;
}