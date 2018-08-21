import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { AreaService } from '../../../../../services/std/area.service';
import { Nsi } from '../../../../../services/models/models';
import { NsiService } from '../../../../../services/nsi.service';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPartComponent implements OnInit {
  part: any;
  @Input() areaId: string;
  @Input() parentId: string;
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  types: Promise<Nsi[]>;
  constructor(private areaService: AreaService, private nsi: NsiService) {
    this.part = {};
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
