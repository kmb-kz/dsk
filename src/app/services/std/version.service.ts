import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../common/http.service';
import { File64 } from '../../pages/common/file/file.component';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../models/models';

@Injectable()
export class VersionService {
  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/std/version';
  }
  filter(filter: VersionFilter): Observable<VersionResponse> {
    return this.http.post(this.url + '/filter', filter);
  }

  request(request: VersionRequest): Observable<boolean> {
    return this.http.post(this.url, request);
  }
  get(id: string): Observable<VersionResponseModel> {
    return this.http.get(this.url + '/' + id);
  }
}
export class VersionFilter {
  page = 1;
  total: number;
  size = 15;
  standardId: string;
}
export class VersionResponse {
  results: VersionResponseModel[];
  total: number;
}
export class VersionResponseModel {
  id: string;
  number: number;
  standard: Nsi;
  description: string;
  dateCreated: Date;
  validImages: string[];
  invalidImages: string[];
  byDefault: any;
  parameters: any[]; 
}

export class VersionRequest {
  areaStandardId: string;
  description: string;
  validImages: File64[];
  invalidImages: File64[];
  parameters: Nsi[] = [];
}
