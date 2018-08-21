import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {PushMessagesModel} from '../models/push-messages.model';


@Injectable()
export class NotificationsService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl + 'api/ntf/Notification';
  }

  getNotificationsServ(): Observable<PushMessagesModel[]> {
    const myUrl = this.url;
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser'));
    return this.httpClient.get( myUrl, { headers: myHeaders });
  }

  getNotificationsLocal(): Observable<PushMessagesModel[]> {
    // const myUrl = this.url + '/Notification';
    const myUrl = 'assets/push.data.json';
    // return this.http.get(myUrl).map(response => response.json());
    return this.httpClient.get<PushMessagesModel[]>(myUrl);

  }

  openNotificationsServ(id: string): Observable<any> {
    const myUrl = this.url + '/OpenNotification?id=' + id;
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('tokenUser')).set('Content-Type', 'application/json');
    return this.httpClient.post( myUrl, { headers: myHeaders });
  }

}
