import { Component, OnInit } from '@angular/core';
import { RpmReportService } from '../../../../../services/rpm/rpm-report.service';
import { CalendarSettings } from '../../../../../CalendarSettings';


@Component({
  selector: 'app-rpm-report-inspectors',
  templateUrl: './rpm-report-inspectors.component.html',
  styleUrls: ['./rpm-report-inspectors.component.css'],
  providers: [RpmReportService]
})
export class RpmReportInspectorsComponent implements OnInit {

  statInspector = 0;
  inspectorsList: any;
  startDateValue: Date;
  endDateValue: Date;
  startDate: string;
  endDate: string;
  ru: any;
  data: any;
  tableVisable = true;
  grafVisable = false;
  constructor(private service: RpmReportService) { }

  ngOnInit() {
    this.ru = CalendarSettings.ru;
    this.getInspectorList();
  }

  getStatInspector() {
  }

  getInspectorList() {
    this.service.getInspectors().subscribe(
      result => {
        this.inspectorsList = result;
      }
    );
  }

  getRemarkInspector() {
    //this.startDate = new Date(this.startDateValue).toLocaleDateString();
    //this.endDate = new Date(this.endDateValue).toLocaleDateString();
    this.service.getInspectorRemarks(this.statInspector, this.startDateValue, this.endDateValue)
      .subscribe(
        result => {
          this.data = result;
        }
      );

  }
}
