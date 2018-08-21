import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaPartService } from '../../services/area-part.service';
import { AreaState } from '../../area.state';
import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  parts: any[];
  adding: boolean;
  editing: any;
  constructor(private route: ActivatedRoute, private service: AreaPartService,
    public state: AreaState, public auth: AuthService) {
    route.params.subscribe(p => {
      state.PartId = p["id"];
      if (!state.Part || state.Part.id != state.PartId) {
        service.get(state.PartId).subscribe(i => {
          state.Part = i;
        });
      }
      service.areaParts(state.ModuleId, null, state.PartId).subscribe(i => {
        this.parts = i;
      });
    })
  }
  ngOnInit() {
  }

  addPart(part) {
    part.moduleId = this.state.ModuleId;
    part.parentId = this.state.PartId;
    this.service.post(part).subscribe(i => {
      this.adding = false;
      part.id = i;
      this.parts.push(part);
    });
  }
  editPart(part) {
    this.service.put(part.id, part).subscribe(i => {

    });
  }
  deletePart(part, index) {
    this.service.delete(part.id).subscribe(i => {
      this.parts.splice(index, 1);
    })
  }
}
