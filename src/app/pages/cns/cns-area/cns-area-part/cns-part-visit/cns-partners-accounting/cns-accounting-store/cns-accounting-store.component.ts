import { Component, OnInit, OnDestroy } from '@angular/core';
import { CnsAreaComponentModel } from '../../../../cns-area.component';
import { CnsVisitLogService } from '../../../../../../../services/cns/cns-visit-log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cns-accounting-store',
  templateUrl: './cns-accounting-store.component.html',
  styleUrls: ['./cns-accounting-store.component.css']
})
export class CnsAccountingStoreComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  monthsDisplay: boolean = false;

  planTotal: number; 
  factTotal: number;
  months: any; 
  printToCart(printSectionId: string){
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();}
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  result: any[] = [];
  contractId: string;
  constructor(public model: CnsAreaComponentModel, private service: CnsVisitLogService) { }

  ngOnInit() {
    
    this.subscription = this.model.ContractId.subscribe(i => {
      if (i) {
        this.contractId = i;
        this.service.store(i)
          .subscribe(i => {
            this.result = i;
            this.planTotal = i.reduce((sum,item)=> { return sum + item.planTotal},0);
            this.factTotal = i.reduce((sum,item)=> { return sum + item.factTotal},0);
            this.months =  i.sort((b,a)=>a.monthsSize.toString().localeCompare(b.monthsSize.toString()))[0].months;
          });
      }
    });


  }
  find(months, m): any {
    return months.find(node=>node.month == m.month);
  }
  searchIndex(months, m): any
  {
    return months.findIndex(function(month) { return month.monthName === m.monthName; } );
  }
  openCloseDetails(item: any) {
    if (item.detailStatus == 'downloaded') {
      item.detailStatus = null;
    }else{
      if (!item.details) {
        item.detailStatus = 'downloading';
        this.service.storeStep(this.contractId, item.number).subscribe(i => {
          item.detailStatus = 'downloaded';
          item.details = i;
        });
      } else {
        item.detailStatus = 'downloaded';
      }
    }
  }
}
