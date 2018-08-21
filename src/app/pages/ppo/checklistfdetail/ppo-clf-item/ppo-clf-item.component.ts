import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckListFItem } from '../../../../services/models/ppo/fixCL/checklistf-item.model';
import { ModalDateCorrected, ModalDate, Calendar } from '../checklistfdetail.component';
import { FixClService } from '../../../../services/ppo/fix-cl.service';
import { AuthService, Claims } from '../../../../services/common/auth.service';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { CalendarSettings } from '../../../../CalendarSettings';
import { File64 } from '../../../common/file/file.component';
import { Nsi } from '../../../../services/models/models';


@Component({
  selector: 'app-ppo-clf-item',
  templateUrl: './ppo-clf-item.component.html',
  styleUrls: ['./ppo-clf-item.component.css'],
  providers: [ToasterComponent]
})
export class PpoClfItemComponent implements OnInit {

  constructor(public auth: AuthService, private service: FixClService, private toaster: ToasterComponent
  ) { }

  @Input() cli: CheckListFItem;
  @Input() answerListId: string;
  @Input() answerListStatusId: string;
  @Input() claims: Claims;
  @Input() breakdown: Nsi;
  @Output() refresh = new EventEmitter();


  ngOnInit() {
  }

  ngOnChanges() {
  }

  check() {
    this.refresh.emit();
  }



}

