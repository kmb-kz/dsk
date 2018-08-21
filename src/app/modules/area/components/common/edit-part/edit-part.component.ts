import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nsi } from '../../../../../services/models/models';
import { AreaService } from '../../../services/area.service';
import { NsiService } from '../../../../../services/nsi.service';

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css']
})
export class EditPartComponent implements OnInit {
  @Input() part: any;
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  types: Promise<Nsi[]>;
  constructor(private areaService: AreaService, private nsi: NsiService) {
    this.types = nsi.areaPartTypes();
  }

  ngOnInit() {
  }

  formSubmit() {
    this.submit.emit(this.part);
  }
  onCancel() {
    this.cancel.emit();
  }

}
