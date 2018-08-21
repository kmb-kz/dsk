import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-ppo-commission',
  templateUrl: './ppo-commission.component.html',
  styleUrls: ['./ppo-commission.component.css']
})
export class PpoCommissionComponent implements OnInit {

  @Input() pcAudit: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
