import { Component, OnInit } from '@angular/core';
import { RpmReportService } from '../../../../../services/rpm/rpm-report.service';
import { CnsArea } from '../../../../../services/cns/cns-area.service';

@Component({
  selector: 'app-rpm-report-active',
  templateUrl: './rpm-report-active.component.html',
  styleUrls: ['./rpm-report-active.component.css'],
  providers: [RpmReportService]
})
export class RpmReportActiveComponent implements OnInit {

  statActive = 0;
  tableVisable = true;
  grafVisable = false;
  data: any;
  dataGraf: any;
  options: any;
  constructor(private service: RpmReportService) { }

  ngOnInit() {
    this.getStatActive(this.statActive);
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


  getStatActive(idValue) {
    this.service.getStatActive(idValue).subscribe(
      result => {
        this.data = result;
        var labels = [], cnt = [];
        for (let i = 0; i < result.length; i++) {
          labels.push(result[i].name);
          cnt.push(result[i].cnt);
        }
        this.dataGraf = {
          labels: labels,
          datasets: [
            {
              label: 'Всего замечаний',
              backgroundColor: '#cc3131',
              borderColor: '#1E88E5',
              data: cnt
            }
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
