import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventCalendar, CnsVisitLogService, ForOne } from '../../../../../../../services/cns/cns-visit-log.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CnsAreaComponentModel } from '../../../../cns-area.component';
import { debug } from 'util';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-cns-accounting-oper',
  templateUrl: './cns-accounting-oper.component.html',
  styleUrls: ['./cns-accounting-oper.component.css']
  
})
export class CnsAccountingOperComponent implements OnInit, OnDestroy {
  
  printToCart(printSectionId: string){
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();}
  subscription: Subscription;
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  header: any;

  events: EventCalendar[];
  countBuilders: number = 0;
  editMode: boolean = true;
  showAddDiialogFlag: boolean;

  forOne: ForOne = new ForOne();  

  constructor(private route: ActivatedRoute, private router: Router,
    private service: CnsVisitLogService, private model: CnsAreaComponentModel) { }


  ngOnInit() {
    this.subscription = this.model.ContractId.subscribe(i => {
      if (i)
      {
      this.contractId = i;
      this.loadData();
      this.loadForOne();
      }
    });
    this.header = {
      left: 'title',
      center: '',
      right: 'prev,next'
    };
  }

  refreshEvents(fc) {
    fc.prev();
    fc.back();
  }

  eventRender(event, element, view) {
    element.html('<div class="fc-content"> <span class="fc-title">'+
    event.title +
    '</span></div><div class="fc-resizer fc-end-resizer"></div>')
  }
  clickEvent(event)
  {
    this.showDialog()
    console.info(event);
  }
 
  showDialog() {
    this.showAddDiialogFlag = true;
  }
  start: string;
  end: string;
  contractId: string;
  loadEvents(event) {
    this.start = moment(event.view.start).format('YYYY-MM-DD');
    this.end = moment(event.view.end).format('YYYY-MM-DD');
    this.loadData();
    this.loadForOne();
  }
  loadForOne(){
    if (this.start && this.end) {
      this.service.forOne(this.start, this.end, this.contractId).subscribe(
        data => {
          this.forOne = data;
        },
        error => {

        }
      );
    }
  }
  loadData() {
    if (this.start && this.end) {
      this.service.get(this.start, this.end, this.contractId).subscribe(
        data => {
          if (data.success) {
            this.events = data.result;
          }
        },
        error => {

        }
      );
    }
  }





  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  setLogToday(index: number) {
    var currentLog = this.events[index];
    /*this.service.setLogToday(this.partnerId, this.areaPartId, this.constructiveId, this.countBuilders).subscribe(
      data=>{
        if (data.success === true)
        {
          this.showAddDiialogFlag = false;
        } 
      }
    )*/
  }

}
