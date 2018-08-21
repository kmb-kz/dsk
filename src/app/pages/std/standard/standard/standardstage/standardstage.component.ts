import { Component, OnInit, Input } from '@angular/core';
import { StandardService } from '../../../../../services/std/standard.service';
import { Stage } from '../../../../../services/cns/cns-constructive.service';

@Component({
  selector: 'app-standardstage',
  templateUrl: './standardstage.component.html',
  styleUrls: ['./standardstage.component.css']
})
export class StandardstageComponent implements OnInit {

  @Input() constructiveId: string;
  @Input() standardId: string;
  @Input() stages: Stage[];

  @Input() stageId: string;
  editMode: boolean = false;


  constructor(private service: StandardService) { }

  ngOnInit() {

  }

  enableEditStage(enable: boolean) {
    this.editMode = enable;
  }
  updateStage() {
    if (this.stageId != null) {
      this.service.updateStage(this.standardId, this.stageId)
        .subscribe(x => {
          this.editMode = false;
        });
    } else {
      alert('Вы не выбрали этап!!!');
    }
  }


}
