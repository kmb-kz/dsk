import { Component, OnInit, OnDestroy } from '@angular/core';
import { CnsAreaComponentModel } from '../../../../cns-area.component';
import { CnsVisitLogService } from '../../../../../../../services/cns/cns-visit-log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cns-accounting-m29',
  templateUrl: './cns-accounting-m29.component.html',
  styleUrls: ['./cns-accounting-m29.component.css']
})
export class CnsAccountingM29Component implements OnInit, OnDestroy {
  
  subscription: Subscription;
  monthsDisplay: boolean = false; 
  printToCart(printSectionId: string){
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  result: any[] = [];
  constructor(public model: CnsAreaComponentModel, private service: CnsVisitLogService) { }

  ngOnInit() {
    this.subscription = this.model.ContractId.subscribe(i => {
      if (i) {
        this.service.m29(i)
          .subscribe(i => {
            this.result = i;
          });
      }
    });
  }
}
