import { Component, OnInit, Input } from '@angular/core';
import { Stage, CnsConstructiveService } from '../../../../../../../services/cns/cns-constructive.service';
import { CnsAnswerService } from '../../../../../../../services/cns/cns-answer.service';
import { Nsi } from '../../../../../../../services/models/models';

@Component({
  selector: 'app-cns-point-stage',
  templateUrl: './cns-point-stage.component.html',
  styleUrls: ['./cns-point-stage.component.css']
})
export class CnsPointStageComponent implements OnInit {

  @Input() constructiveId: string; 
  @Input() standardId: string; 
  @Input() stages: Stage[]; 

  stageId: string; 
  editMode: boolean = false;
  
  
  constructor( private service: CnsConstructiveService, private answerService: CnsAnswerService) { }
  
  ngOnInit() {
  
  }

  enableEditStage(enable: boolean)
  {
    this.editMode = enable;
  }
  updateStage(){
    this.answerService.updateStageOfStandard(this.standardId, this.stageId)
    .subscribe(x=>{
      
    });
  }

}
