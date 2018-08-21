import { Component, OnInit } from '@angular/core';
import { TsuAreasService, TsuPart } from "../../../services/tsu/tsu-areas.service";
import { TsuRemarksService, TsuRemark } from "../../../services/tsu/tsu-remarks.service";
import { TsuAreaComponentModel } from "../tsu.component";

@Component({
  selector: 'app-tsu-area-parts',
  templateUrl: './tsu-area-parts.component.html',
  styleUrls: ['./tsu-area-parts.component.css']
})
export class TsuAreaPartsComponent implements OnInit {
	parts: TsuPart[] = [];
	remarks: TsuRemark[] = [];
	statistics = { notMatches: 0, fixed: 0 };
	constructor(private service: TsuAreasService, public model: TsuAreaComponentModel, public remarksService: TsuRemarksService) { }

	ngOnInit() {
		console.log(this.model);
		this.service.areaParts(this.model.Id, null).subscribe(i => {
			i.forEach(part => {
				this.statistics.notMatches += part.notMatches;
				this.statistics.fixed += part.fixed;
			});
			this.parts = i;
		});

		this.remarksService.remarks(this.model.Id, this.model.PartId).subscribe(i => {
			this.remarks = i;
		});
	}

	addAreaPart() {
		this.parts.push(new TsuPart());
	}

	removeAreaPart(part) {
		var index = this.parts.indexOf(part);
		this.parts.slice(index, index + 1);
	}
}
