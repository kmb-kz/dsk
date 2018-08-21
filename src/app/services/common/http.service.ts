import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, public auth: AuthService) {
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser')) });
  }

  post<T>(url: string, model: any): Observable<T> {
    return this.http.post<T>(url, model,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser')) });
  }
  postVoid(url: string, model: any): Observable<string> {
    return this.http.post(url, model, {
      responseType: 'text', headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'))
    });
  }

  put<T>(url: string, model: any): Observable<T> {
    return this.http.put<T>(url, model, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser')) });
  }

  putVoid(url: string, model: any): Observable<string> {
    return this.http.put(url, model, {
      responseType: 'text',
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'))
    });
  }

  delete(url: string): Observable<string> {
    return this.http.delete(url, {
      responseType: 'text', headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'))
    });
  }
}
