import { Component, OnInit } from '@angular/core';
import { RpmReportService } from '../../../../../services/rpm/rpm-report.service';


@Component({
  selector: 'app-rpm-report-gm',
  templateUrl: './rpm-report-gm.component.html',
  styleUrls: ['./rpm-report-gm.component.css'],
  providers: [RpmReportService]
})
export class RpmReportGmComponent implements OnInit {

  remarkCriticales: any;
  constructor(private service: RpmReportService) { }
  ngOnInit() {
    this.getCrititcalRemark();
  }

  getCrititcalRemark() {
    this.service.getGM().subscribe(
      i => {
        this.remarkCriticales = i;
      }
    );
  }
}
