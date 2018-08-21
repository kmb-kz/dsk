import { Component, OnInit, Input } from '@angular/core';
import { StageVolume, CnsPartnerService } from '../../../../../services/cns/cns-partner.service';
import { Filter } from '../../../../../services/std/standard.service';

@Component({
  selector: 'app-cns-contract-stage',
  templateUrl: './cns-contract-stage.component.html',
  styleUrls: ['./cns-contract-stage.component.css']
})
export class CnsContractStageComponent implements OnInit {
  @Input() stageVolume:StageVolume;
  @Input() contractId: string; 
  constructor( private service: CnsPartnerService) { }
  

  ngOnInit() {
   
  }

  ngOnChanges(){
   
  }

  editMode: boolean = false;
  enableEdit(enable:boolean)
  {
      this.editMode = enable; 
  }
  update()
  {
    
    this.service.updateStageVolume(this.contractId, this.stageVolume.id, this.stageVolume.volume).subscribe(x=>{
   
    });
    this.enableEdit(false);
  }
}
