import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-rpm-report',
  templateUrl: './rpm-report.component.html',
  styleUrls: ['./rpm-report.component.css']
})
export class RpmReportComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
