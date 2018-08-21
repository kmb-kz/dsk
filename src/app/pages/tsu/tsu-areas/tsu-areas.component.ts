import { Component, OnInit } from '@angular/core';
import { TsuArea, TsuAreasService } from '../../../services/tsu/tsu-areas.service';
import { AuthService } from '../../../services/common/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-tsu-areas',
	templateUrl: './tsu-areas.component.html',
	styleUrls: ['./tsu-areas.component.css']
})
export class TsuAreasComponent implements OnInit {
	search: string;
	areas: Promise<TsuArea[]>;
	constructor(private service: TsuAreasService, public auth: AuthService) { }
	visableAddObject: boolean = false;
	name: string;
	host: string;
	ngOnInit() {
		this.host = environment.apiUrl;
		this.load();

	}
	load() {
		this.areas = this.service.areas().toPromise();
	}
	toggleForm(): void {
		this.visableAddObject = !this.visableAddObject;
	}
}
