import { Component, OnInit } from '@angular/core';
import { NsiService } from '../../../../../services/nsi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaService } from '../../../../../services/std/area.service';
import { AreaComponentModel } from '../AreaComponentModel';

@Component({
  selector: 'app-areaimportgroup',
  templateUrl: './areaimportgroup.component.html',
  styleUrls: ['./areaimportgroup.component.css']
})
export class AreaimportgroupComponent implements OnInit {
  id: string;
  moduleId: number;
  modules: any;
  statusImport: boolean = false;
  constructor(public nsi: NsiService, public service: AreaService, private model: AreaComponentModel,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getModules();
  }
  import() {
    this.statusImport = true;
    this.service.importGroup(this.model.AreaId, this.id, this.moduleId).subscribe(i => {
      this.model.Standards = this.service.standards(this.model.AreaId).toPromise();
      this.statusImport = false;
      this.router.navigate(['../standard'], { relativeTo: this.route });
    });
  }

  getModules() {
    this.service.modules().subscribe(i => {
    //console.log(i);
      this.modules = i;
    });
  }
}
