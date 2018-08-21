import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Nsi } from '../models/models';
import { File64 } from '../../pages/common/file/file.component';

@Injectable()
export class TsuRemarksService {
	url = environment.apiUrl + 'api/tsu/';
	constructor(private client: HttpService) { }
	remarks(areaId: string, partId: string): Observable<TsuRemark[]> {
		return Observable.from([]);
	}
	delete(id: string): Observable<string> {
		return new Observable<string>();
		//return this.client.delete(this.url + 'remarks/' + id);
	}
	update(item: any): Observable<string> {
		console.log(item);
		return new Observable<string>();
		//return this.client.putVoid(this.url + 'remarks', item);
	}
	insert(item: any): Observable<string> {
		console.log(item);
		return new Observable<string>();
		//return this.client.post(this.url + 'remarks', item);
	}
}

export class TsuRemark {
	id: string;
	message: string;
	areaId: string;
	partId: string;
	point: string;
}
