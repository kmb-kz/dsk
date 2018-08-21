import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TsuAreaComponentModel } from '../tsu.component';
import { TsuPart, TsuAreasService } from "../../../services/tsu/tsu-areas.service";

@Component({
  selector: 'app-tsu-area-part',
  templateUrl: './tsu-area-part.component.html',
  styleUrls: ['./tsu-area-part.component.css']
})
export class TsuAreaPartComponent implements OnInit {
	part: Promise<TsuPart>;
	breadcrumbs: TsuPart[] = [];
	constructor(public model: TsuAreaComponentModel, private router: Router, private route: ActivatedRoute,
		private service: TsuAreasService) {
		this.route.params.forEach(params => {
			this.model.PartId = params['id'];
			this.part = this.service.part(this.model.PartId).toPromise();
			this.service.breadcrumbs(this.model.PartId).subscribe(i => {
				this.breadcrumbs = i;
			});
		});
	}

	ngOnInit() {
	}
}
