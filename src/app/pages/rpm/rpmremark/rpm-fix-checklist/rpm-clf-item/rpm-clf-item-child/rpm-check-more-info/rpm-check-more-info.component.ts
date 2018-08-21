import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../../../../services/common/auth.service';

@Component({
  selector: 'app-rpm-check-more-info',
  templateUrl: './rpm-check-more-info.component.html',
  styleUrls: ['./rpm-check-more-info.component.css']
})
export class RpmCheckMoreInfoComponent implements OnInit {

  @Input() answerItemId: string;
  @Input() comment: string;
  @Input() photos?: any[];
  @Input() nameCheckList: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
