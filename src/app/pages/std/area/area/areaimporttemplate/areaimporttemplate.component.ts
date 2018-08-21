import { Component, OnInit } from '@angular/core';
import { Nsi } from '../../../../../services/models/models';
import { NsiService } from '../../../../../services/nsi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaService } from '../../../../../services/std/area.service';
import { AreaComponentModel } from '../AreaComponentModel';

@Component({
  selector: 'app-areaimporttemplate',
  templateUrl: './areaimporttemplate.component.html',
  styleUrls: ['./areaimporttemplate.component.css']
})
export class AreaimporttemplateComponent implements OnInit {
  id: string;
  moduleId: number;
  constructor(public nsi: NsiService, public service: AreaService, private model: AreaComponentModel,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  import(){
    this.service.import(this.model.AreaId, this.id, this.moduleId).subscribe(i => {
      this.model.Standards = this.service.standards(this.model.AreaId).toPromise();
      this.router.navigate(['../standard'], { relativeTo: this.route });
    });
  }
}
