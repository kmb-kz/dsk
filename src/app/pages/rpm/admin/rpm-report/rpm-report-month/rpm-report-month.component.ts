import { Component, OnInit } from '@angular/core';
import { RpmReportService } from '../../../../../services/rpm/rpm-report.service';

@Component({
  selector: 'app-rpm-report-month',
  templateUrl: './rpm-report-month.component.html',
  styleUrls: ['./rpm-report-month.component.css'],
  providers: [RpmReportService]
})
export class RpmReportMonthComponent implements OnInit {

  yearSelect = 2018;
  tableVisable = true;
  grafVisable = false;
  data: any;
  dataGraf: any;
  options: any;
  totalSumm: number;
  constructor(private service: RpmReportService) { }

  ngOnInit() {
    this.getYearRemark(this.yearSelect);
  }

  visableElement(num: number) {
    if (num === 1) {
      this.tableVisable = true;
      this.grafVisable = false;
    } else {
      this.grafVisable = true;
      this.tableVisable = false;
    }
  }

  getYearRemark(year) {
    this.service.getRemarkInspectorYear(year).subscribe(
      result => {
        this.data = result;
        var labels = [], cnt = [];
        this.totalSumm = 0;
        for (let i = 0; i < this.data.length; i++) {
          this.totalSumm = this.totalSumm + this.data[i].m1 + this.data[i].m2 + this.data[i].m3
            + this.data[i].m4 + this.data[i].m5 + this.data[i].m6 + this.data[i].m7
            + this.data[i].m8 + this.data[i].m9 + this.data[i].m10 + this.data[i].m11 + this.data[i].m12;
          //console.log(this.totalSumm);

          labels.push(this.data[i].lastName + ' ' + this.data[i].firstName);
          cnt.push(this.totalSumm);
        }
        //console.log(cnt);

        this.dataGraf = {
          labels: labels,
          datasets: [
            {
              label: 'Всего замечаний за ' + this.yearSelect + ' год',
              backgroundColor: '#cc3131',
              borderColor: '#1E88E5',
              data: cnt
            },


          ]
        };
        this.options = {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: {
                min: 0,
                autoSkip: false
              }
            }]
          }
        };
      }

    );

  }
}
