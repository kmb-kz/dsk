import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nsi } from '../../../../../../services/models/models';
import { RoughingService } from '../../../services/roughing.service';
import { RoughingState } from '../../../roughing.state';
export class FilterModel {
  roomId: string;
  stepId: string;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() submit = new EventEmitter<FilterModel>();
  apartments$: Promise<Nsi[]>;
  apartmentId: string;
  rooms: Nsi[];
  model = new FilterModel();
  constructor(private service: RoughingService, state: RoughingState) {
    this.apartments$ = service.apartments(state.PartId).toPromise();
    this.apartments$.then(async i => {
      if (i.length > 0) {
        this.apartmentId = i[0].id;
        this.rooms = await service.rooms(i[0].id).toPromise();
        this.model.roomId = this.rooms[0].id;
      }
    })
  }
  async onApartmentChange() {
    this.model.roomId = null;
    if (this.apartmentId) {
      this.rooms = await this.service.rooms(this. apartmentId).toPromise();
      this.model.roomId = this.rooms[0].id;
    }
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submit.emit(this.model);
  }
}
