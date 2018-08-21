import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { MultiSelect } from 'primeng/primeng';
import { RpmObjectService } from '../../../../../services/rpm/rpm-object.service';
import { RpmReportService } from '../../../../../services/rpm/rpm-report.service';

interface Area {
  name: string,
  id: string
}

@Component({
  selector: 'app-rpm-report-statistics',
  templateUrl: './rpm-report-statistics.component.html',
  styleUrls: ['./rpm-report-statistics.component.css'],
  providers: [RpmReportService]
})

export class RpmReportStatisticsComponent implements OnInit {

  areas: Area[];
  selectedArea: Area[];
  data: any;
  selectArea: any[];
  areaList: string;

  constructor(private servicesObject: RpmObjectService, private service: RpmReportService) {
  }

  ngOnInit() {
    this.servicesObject.getObjects('', 4).subscribe(
      result => {
        this.areas = result;
      }
    );
  }

  areaSelect($event) {
    this.selectArea = [];
    this.selectArea = $event.value;
  }

  shapeReport() {
    this.data = [];
    this.service.getAreasRemarks(this.selectArea).subscribe(
      result => {
        this.data = result;
      }
    );

  }

}
