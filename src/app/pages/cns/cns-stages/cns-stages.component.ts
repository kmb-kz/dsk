import { Component, OnInit } from '@angular/core';
import { CnsConstructiveService, Stage, Constructive } from '../../../services/cns/cns-constructive.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NsiService } from '../../../services/nsi.service';
import { Filter } from '../../../services/std/standard.service';

@Component({
  selector: 'app-cns-stages',
  templateUrl: './cns-stages.component.html',
  styleUrls: ['./cns-stages.component.css']
})
export class CnsStagesComponent implements OnInit {
  filter: Filter = new Filter();

  stages: Stage[];

  newStage: Stage = new Stage();
  constructive: Constructive;
  constructor(private route: ActivatedRoute, private router: Router,
    private service: CnsConstructiveService, private nsi: NsiService) {
  }


  ngOnInit() {
    this.constructive = new Constructive();
    this.constructive.id = this.route.snapshot.paramMap.get('id');
    this.getStages();
    this.select(null);
  }


  getStages() {
    this.service.getStages(this.constructive.id).subscribe(x => {
      if (x.success) {
        this.stages = x.result;
      }
    });
  }
  select(selectedId) {
    this.filter = new Filter();
    this.filter.stageId = selectedId;
    this.filter.constructiveId = this.constructive.id;
    this.filter.isDeleted = false;
    this.filter.groupId = "ADDC0472-351B-4DE9-A827-1BBE89F65680" //<== TODO: убрать потом
  }

  showAddDialogFlag: boolean;
  showAddDialog() {
    this.showAddDialogFlag = true;
  }
  cancel() {
    this.showAddDialogFlag = false;
  }
  add() {
    this.newStage.constructiveId = this.constructive.id;
    this.service.addStage(this.newStage).subscribe(x => {
      this.showAddDialogFlag = false;
      this.getStages();
    });

  }
}
