import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/common/auth.service';
import { AreaComponentModel } from '../AreaComponentModel';
import { AreaService, AreaStandard } from '../../../../../services/std/area.service';

@Component({
  selector: 'app-areastandards',
  templateUrl: './areastandards.component.html',
  styleUrls: ['./areastandards.component.css']
})
export class AreastandardsComponent implements OnInit {

  constructor(public auth: AuthService, public model: AreaComponentModel,
    private service: AreaService) {
    
  }

  ngOnInit() {
    if (!this.model.Standards) {
        this.model.Standards = this.service.standards(this.model.AreaId).toPromise();
    }
  }
  delete(standard: AreaStandard) {
    standard.deleted = true;
    this.service.delete(standard.id).subscribe();
  }

  restore(standard: AreaStandard) {
    standard.deleted = false;
    this.service.restore(standard.id).subscribe();
  }
}
