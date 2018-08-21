import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TsuPart, TsuAreasService } from "../../../services/tsu/tsu-areas.service";
import { TsuRemark, TsuRemarksService } from "../../../services/tsu/tsu-remarks.service";
import { TsuAreaComponentModel } from "../tsu.component";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-tsu-part-children',
  templateUrl: './tsu-part-children.component.html',
  styleUrls: ['./tsu-part-children.component.css']
})
export class TsuPartChildrenComponent implements OnInit {
	children: TsuPart[] = [];
	remarks: TsuRemark[] = [];
	statistics = { notMatches: 0, fixed: 0 };
	partId$: Observable<string>;
	constructor(
		private service: TsuAreasService,
		private remarksService: TsuRemarksService,
		public model: TsuAreaComponentModel,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.partId$ = this.route.params.pluck('id');
		this.partId$.subscribe((partId) => {
			this.model.PartId = partId;
			this.service.areaParts(this.model.Id, partId).subscribe(i => {
				this.children = i;
			});

			this.remarksService.remarks(this.model.Id, this.model.PartId).subscribe(i => {
				this.remarks = i;
			});
		});
		//this.service.areaParts(this.model.Id, this.model.PartId).subscribe(i => {
		//	this.children = i;
		//});
	}
}
