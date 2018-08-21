import { Component, OnInit } from '@angular/core';
import { CnsVisitLogService, VisitLog } from '../../../../../../services/cns/cns-visit-log.service';
import { Nsi } from '../../../../../../services/models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { NsiService } from '../../../../../../services/nsi.service';
import { CnsAreaComponentModel } from '../../../cns-area.component';
import { AuthService } from '../../../../../../services/common/auth.service';

@Component({
  selector: 'app-cns-part-visit-log-edit',
  templateUrl: './cns-part-visit-log-edit.component.html',
  styleUrls: ['./cns-part-visit-log-edit.component.css']
})
export class CnsPartVisitLogEditComponent implements OnInit {

  visitLogs: VisitLog[]; 
  constructives: Promise<Nsi[]>; 
  editMode: boolean = false; 
  constructiveId: string = null; 

  constructor(public auth: AuthService, private service: CnsVisitLogService, private nsi: NsiService, 
    private route: ActivatedRoute, private router: Router, private model: CnsAreaComponentModel) {
      this.constructives = nsi.constructivesTree();
  }

  ngOnInit() {
    this.getToday(); 
  }

  enableEdit(enable:boolean) {
   this.editMode = enable; 
  }
  cancelEdit()
  {
    this.ngOnInit();
    this.enableEdit(false);
  }

  getToday()
  {
    this.service.getVisit(this.model.PartId, this.constructiveId)
    .subscribe(data=>{
     if (data.success) {
         this.visitLogs = data.result;
     } 
    }) 
  }

  setLogToday(index: number, isHoliday:boolean, isWeatherReason:boolean)
  {
     
      var currentLog = this.visitLogs[index];  
      currentLog.isHoliday = isHoliday; 
      currentLog.isWeatherReason = isWeatherReason; 
      this.service.setLogVisit(this.model.PartId, currentLog).subscribe(
        data=>{
          if (data.success === true)
          {
            this.enableEdit(false);
          } 
        }
      )
  }




}
