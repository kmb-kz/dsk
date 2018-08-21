import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Constructives, OkkStandardService, Standards } from '../../../../services/okk/okk-standard.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-okk-part-check-panel',
  templateUrl: './okk-part-check-panel.component.html',
  styleUrls: ['./okk-part-check-panel.component.css']
})
export class OkkPartCheckPanelComponent implements OnInit {

  @Input() constructives: Constructives[] = [];
  @Input() stageId: string;

  standards: Standards[] = [];
  areaId: string;
  areaPartId: string;

  constructor(private route: ActivatedRoute, public auth: AuthService, private service: OkkStandardService) {
  }

  ngOnInit(): void {
    this.areaId = localStorage.getItem('cns-last-area-id');
    this.selectedInfo(this.constructives[0].id, 0);
  }

  selectedInfo(constructiveId: string, indexId: number) {
    this.standards = [];
    this.service.getAreaStandards(this.areaId, this.areaPartId, constructiveId, this.stageId).subscribe(i => {
      this.standards = i;
    });
  }

  areaPartPause() {
    alert(this.areaPartId);
  }



}
