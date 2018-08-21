import { Component, OnInit } from '@angular/core';
import { NsiService } from '../../../../../services/nsi.service';
import { Nsi } from '../../../../../services/models/models';
import { AreaService } from '../../../../../services/std/area.service';
import { AreaComponentModel } from '../AreaComponentModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-areaaddstandard',
  templateUrl: './areaaddstandard.component.html',
  styleUrls: ['./areaaddstandard.component.css']
})
export class AreaaddstandardComponent implements OnInit {
  constructiveId: string;
  constructives: Promise<Nsi[]>;
  standardId: string;
  standards: Promise<Nsi[]>;
  versionId: string;
  versions: Promise<Nsi[]>;
  constructor(private nsi: NsiService, private service: AreaService, private model: AreaComponentModel,
    private router: Router, private route: ActivatedRoute) {
    this.constructives = nsi.constructives();
    this.constructives.then(i => {
      if (i.length > 0) {
        this.constructiveId = i[0].id;
        this.standards = nsi.constractiveStandards(this.constructiveId);
        this.standards.then(i => {
          if (i.length > 0) {
            this.standardId = i[0].id;
            this.versions = nsi.standardVersions(this.standardId);
            this.versions.then(i => {
              if (i.length > 0) {
                this.versionId = i[0].id;
              }
            });
          }
        });
      }
    });
  }

  ngOnInit() {
  }
  constructiveChange(value: string) {
    this.standards = null;
    if (value) {
      this.standards = this.nsi.constractiveStandards(value);
      this.standards.then(i => {
        if (i.length > 0)
          this.standardChange(i[0].id);
      })
    }

  }
  standardChange(value: string) {
    this.versions = null;
    if (value) {
      this.versions = this.nsi.standardVersions(value);
      this.versions.then(i => {
        if (i.length > 0)
          this.versionId = i[0].id;
      });
    }
  }
  add(){
    this.service.add(this.model.AreaId, this.versionId).subscribe(i => {
      this.model.Standards = this.service.standards(this.model.AreaId).toPromise();
      this.router.navigate(['../standard'], { relativeTo: this.route });
    });
  }
}
