import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/common/auth.service';
import { NsiService } from '../../../services/nsi.service';
import { Nsi } from '../../../services/models/models';
import { TsuAreasService, TsuArea, TsuPart } from "../../../services/tsu/tsu-areas.service";
import { TsuRemark, TsuRemarksService } from "../../../services/tsu/tsu-remarks.service";
import { TsuAreaComponentModel } from "../tsu.component";

@Component({
	selector: 'app-tsu-area-part-list',
	templateUrl: './tsu-area-part-list.component.html',
	styleUrls: ['./tsu-area-part-list.component.css']
})
export class TsuAreaPartListComponent implements OnInit {
	@Input() parts: TsuPart[];
	@Input() remarks: TsuRemark[];
	part: TsuPart;
	remark: TsuRemark;
	breadcrumbs: TsuPart[] = [];
	constructor(public model: TsuAreaComponentModel, private service: TsuAreasService,
		public auth: AuthService, private nsi: NsiService, private remarksService: TsuRemarksService) {
	}

	ngOnInit() {
		this.service.breadcrumbs(this.model.PartId).subscribe(i => {
			this.breadcrumbs = i;
		});
	}

	add() {
		this.part = new TsuPart();
	}

	edit(part) {
		this.part = part;
	}

	cancel() {
		this.part = null;
	}

	save() {
		if (this.part.name && this.part.typeId) {
			if (this.part.id) {
				/*this.service.partUpdate({ id: this.part.id, name: this.part.name })
					.subscribe(i => {
					});*/
			}
			else {
				this.parts.push(this.part);
				/*this.nsi.areaPartTypes().then(i => {
					this.part.typeName = i.filter(i => i.id == this.part.typeId)[0].name
				});
				this.service.partInsert({ name: this.part.name, typeId: this.part.typeId, areaId: this.areaModel.Id, parentId: this.areaModel.PartId })
					.subscribe(i => {
						this.part.id == i;
					})*/
			}
			this.part = null;
		}
	}

	delete(part, index) {
		if (confirm("Вы хотите удалить " + part.typeName + ' ' + part.name + '?')) {
			this.parts.splice(index, 1);
			//this.service.partDelete(part.id).subscribe();
		}
	}

	addRemark() {
		this.remark = new TsuRemark();
		this.remark.areaId = this.model.Id;
		this.remark.partId = this.model.PartId;
	}

	cancelRemark() {
		this.remark = null;
	}

	saveRemark() {
		if (this.remark.point && this.remark.message) {
			if (this.remark.id) {
				/*this.service.partUpdate({ id: this.part.id, name: this.part.name })
					.subscribe(i => {
					});*/
			}
			else {
				this.remarks.push(this.remark);
			}
			this.remark = null;
		}
	}
}
