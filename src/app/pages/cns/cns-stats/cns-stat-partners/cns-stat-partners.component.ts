import { Component, OnInit, OnDestroy } from '@angular/core';
import { CnsStatsService } from '../../../../services/cns/cns-stats.service';
import { CnsStatsComponentModel } from '../cns-stats.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cns-stat-partners',
  templateUrl: './cns-stat-partners.component.html',
  styleUrls: ['./cns-stat-partners.component.css']
})
export class CnsStatPartnersComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  data: any;
  options: any;
  constructor(private service: CnsStatsService, private model: CnsStatsComponentModel) {

  }

  ngOnInit() {
    this.subscription = this.model.AreaId.subscribe(i => {
      this.service.partner(i).subscribe(result => {
        var labels = [], notMatches = [], fixed = [];
        for (let i = 0; i < result.length; i++) {
          labels.push(result[i].item.name);
          notMatches.push(result[i].notMatches);
          fixed.push(result[i].fixed);
        }
        this.data = {
          labels: labels,
          datasets: [
            {
              label: 'Всего замечаний',
              backgroundColor: '#cc3131',
              borderColor: '#1E88E5',
              data: notMatches
            },
            {
              label: 'Исправлено',
              backgroundColor: '#00acac',
              borderColor: '#7CB342',
              data: fixed
            }
          ]
        };
        this.options = {
          legend: {
            display: true, 
            position: 'bottom'
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
      })
    })
  }
}
