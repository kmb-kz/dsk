import { Component, OnInit, Injectable } from '@angular/core';
import { TsuArea, TsuAreasService, TsuPart } from '../../../services/tsu/tsu-areas.service';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../../../services/cns/cns-partner.service';
import { BehaviorSubject } from 'rxjs';
import { TsuAreaComponentModel } from "../tsu.component";

@Component({
  selector: 'app-tsu-area',
  templateUrl: './tsu-area.component.html',
  styleUrls: ['./tsu-area.component.css'],
  providers: [TsuAreaComponentModel]
})
export class TsuAreaComponent implements OnInit {

	constructor(public model: TsuAreaComponentModel, private route: ActivatedRoute,
		private service: TsuAreasService) {

	}

	ngOnInit() {
		this.model.Id = this.route.snapshot.paramMap.get('id');
		localStorage.setItem('tsu-last-area-id', this.model.Id);
		this.model.Area = this.service.area(this.model.Id).toPromise();
	}

}
