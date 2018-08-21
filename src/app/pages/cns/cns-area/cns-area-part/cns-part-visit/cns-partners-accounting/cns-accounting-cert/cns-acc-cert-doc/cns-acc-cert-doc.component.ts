import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CnsVisitLogService, CertDocument } from '../../../../../../../../services/cns/cns-visit-log.service';

@Component({
  selector: 'app-cns-acc-cert-doc',
  templateUrl: './cns-acc-cert-doc.component.html',
  styleUrls: ['./cns-acc-cert-doc.component.css']
})
export class CnsAccCertDocComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CnsVisitLogService) { }
  id: string;
  totalCost: number = 0;
  totalValue: number = 0;
  cert: CertDocument;
  printToCart(printSectionId: string) {
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.certificate(this.id).subscribe(i => {
      this.cert = i;

      i.parameters.forEach(params => {
        console.info(params.value);
        console.info(this.totalValue);
        this.totalValue += Number(params.value);
        //this.totalValue += Number(params.value); 
        this.totalCost += Number(params.cost);

      });
    });
  }


}
