import { Component, OnInit } from '@angular/core';
import { ConstructiveModel } from '../../../../services/models/cns/cnsConstructiveModel';
import { NsiService } from '../../../../services/nsi.service';
import { StandardService } from '../../../../services/std/standard.service';
import { Nsi } from '../../../../services/models/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standardcopy',
  templateUrl: './standardcopy.component.html',
  styleUrls: ['./standardcopy.component.css']
})
export class StandardcopyComponent implements OnInit {

  constructives: Promise<any[]>;
  groups: Promise<Nsi[]>;
  
  groupId:string; 
  srcConstructiveId: string; 
  destConstructiveId: string; 

  constructor(private service: StandardService, private nsi: NsiService,
    private router: Router, private route: ActivatedRoute) {
  }
  
 
 
  ngOnInit() {
    this.constructives = this.nsi.constructivesTree(true); 
    this.constructives = this.nsi.constructivesTree(true); 
    this.groups = this.nsi.groups();
  }

  copy()
  {
    this.service.copy(this.srcConstructiveId, this.destConstructiveId, this.groupId).subscribe(x=>{
     if (x.success)
      this.router.navigate(['/cns/stages', this.destConstructiveId], { relativeTo: this.route });
    });
  }

}
