import { Component, OnInit, Input } from '@angular/core';
import { CnsAnswerService } from '../../../../../../../services/cns/cns-answer.service';

@Component({
  selector: 'app-cns-point-percentage',
  templateUrl: './cns-point-percentage.component.html',
  styleUrls: ['./cns-point-percentage.component.css']
})
export class CnsPointPercentageComponent implements OnInit {

  @Input() parameterId: string; 
  @Input() percentage: number; 

  constructor(private service: CnsAnswerService) { }

  
  ngOnInit() {
  }
  editMode: boolean = false;
  enableEdit(enable:boolean)
  {
      this.editMode = enable; 
  }
  savePercentage()
  {
    this.service.savePercentage(this.parameterId, this.percentage).subscribe(i => {
      
    });
    this.editMode = false;
  }
}
