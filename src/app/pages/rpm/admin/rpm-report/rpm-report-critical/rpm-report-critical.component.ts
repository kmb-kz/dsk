import { Component, OnInit } from '@angular/core';
import { RpmReportService } from '../../../../../services/rpm/rpm-report.service';

@Component({
  selector: 'app-rpm-report-critical',
  templateUrl: './rpm-report-critical.component.html',
  styleUrls: ['./rpm-report-critical.component.css'],
  providers: [RpmReportService]
})
export class RpmReportCriticalComponent implements OnInit {

  remarkCriticales: any;
  constructor(private service: RpmReportService) { }
  ngOnInit() {
    this.getCrititcalRemark();
  }

  getCrititcalRemark() {
    this.service.getCriticalRemarks().subscribe(
      i => {
        this.remarkCriticales = i;
      }
    );
  }

}
