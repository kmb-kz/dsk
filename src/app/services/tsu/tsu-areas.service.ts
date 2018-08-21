import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Nsi } from '../models/models';
import { File64 } from '../../pages/common/file/file.component';

@Injectable()
export class TsuAreasService {
	url = environment.apiUrl + 'api/cns/area/';
	//url = environment.apiUrl + 'api/tsu/area/';
	constructor(private client: HttpService) { }
	areas(): Observable<TsuArea[]> {
		return this.client.get(this.url);
	}
	area(id: string): Observable<TsuArea> {
		return this.client.get(this.url + id);
	}
	areaParts(areaId: string, partId: string): Observable<TsuPart[]> {
		return this.client.get(this.url + 'areaparts?' + (areaId ? 'areaId=' + areaId : '') + (partId ? '&partId=' + partId : ''));
	}
	part(id: string): Observable<TsuPart> {
		return this.client.get(this.url + 'part/' + id);
	}
	partDelete(id: string): Observable<string> {
		return this.client.delete(this.url + 'part/' + id);
	}
	partUpdate(part: any): Observable<string> {
		return this.client.putVoid(this.url + 'part', part);
	}
	partInsert(part: any): Observable<string> {
		return this.client.post(this.url + 'part', part);
	}
	breadcrumbs(id: string): Observable<TsuPart[]> {
		return this.client.get(this.url + 'partBreadcrumbs/' + id);
	}
}

export class TsuArea {
}

export class TsuPart {
	id: string;
	name: string;
	typeId: string;
	typeName: string;
	fixed: number;
	notMatches: number;
}