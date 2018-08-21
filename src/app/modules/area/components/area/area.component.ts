import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaPartService } from '../../services/area-part.service';
import { AreaState } from '../../area.state';
import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  parts: any[];
  adding: boolean;
  editing: any;
  constructor(private route: ActivatedRoute, private service: AreaPartService,
    private state: AreaState, public auth: AuthService) {
    state.AreaId = route.snapshot.params["id"];
    service.areaParts(state.ModuleId, state.AreaId).subscribe(i => {
      this.parts = i;
    });
  }
  ngOnInit() {
  }

  addPart(part) {
    this.adding = false;
    part.moduleId = this.state.ModuleId;
    part.areaId = this.state.AreaId;
    this.service.post(part).subscribe(i => {
      this.adding = false;
    });
  }
  editPart(part){
    this.service.put(part.id, part).subscribe(i=>{

    });
  }
  deletePart(part, index){
    this.service.delete(part.id).subscribe(i=>{
      this.parts.splice(index, 1);
    })
  }
}
