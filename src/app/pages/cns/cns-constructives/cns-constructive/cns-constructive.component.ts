import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { NsiService } from '../../../../services/nsi.service';
import { CnsConstructiveService, Constructive } from '../../../../services/cns/cns-constructive.service';



@Component({
  selector: 'app-cns-constructive',
  templateUrl: './cns-constructive.component.html',
  styleUrls: ['./cns-constructive.component.css']
})
export class CnsConstructiveComponent implements OnInit {

  @Input() constructive:Constructive; 
  @Output() changed:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isChild: boolean;


  newConstructive:Constructive = new Constructive();

  showAddDiialogFlag: boolean; 

  constructor(private service: CnsConstructiveService) {
  

   }

  ngOnInit() {
    console.info(this.constructive);

  }

  editMode: boolean = false;
  enableEdit(enable:boolean)
  {
      this.editMode = enable; 
  }
  saveVolume()
  {
    this.service.saveVolume(this.constructive.id, this.constructive.volume).subscribe(i => {
      this.enableEdit(false);
    });
  }
  addChildDialog(id:string)
  {
    this.newConstructive.id = id; 
    this.showAddDiialogFlag = true; 
  }
  addChild()
  {
    this.service.addChild(this.newConstructive).subscribe(i=>{
      this.changed.emit(true); 
    });
    this.showAddDiialogFlag = false; 
  }
  cancel()
  {
    this.showAddDiialogFlag = false; 
  }
  
 

}


