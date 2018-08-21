import { Component, OnInit, Input } from '@angular/core';
import { CnsAreaComponentModel } from '../cns-area.component';
import { CnsAnswerService, CnsAnswerMessage } from '../../../../services/cns/cns-answer.service';
import { AuthService } from '../../../../services/common/auth.service';
import { Nsi } from '../../../../services/models/models';
import { NsiService } from '../../../../services/nsi.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-cns-area-answers',
  templateUrl: './cns-area-answers.component.html',
  styleUrls: ['./cns-area-answers.component.css']
})
export class CnsAreaAnswersComponent implements OnInit {
  partnerId = '';
  partId = '';
  @Input() schemeId = '';
  @Input() showFilter = false;
  answers: any[] = [];
  partners: Promise<Nsi[]>;
  parts: Promise<Nsi[]>;
  showMessagesFlag: boolean = true; 
  constructor(private model: CnsAreaComponentModel, private service: CnsAnswerService,
    public auth: AuthService, private nsi: NsiService) {
  }
  printToCart(printSectionId: string){
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
  ngOnInit() {

    this.partners = this.nsi.partners()
    this.parts = this.nsi.areaParts(this.model.Id);
    this.Get();
  }
  Get() {
    this.answers = [];
    this.service.areaAnswers(this.model.Id, this.partnerId, this.partId, null, this.schemeId)
      .subscribe(i => {
        this.answers = i;
      
      });
  }

  currentId: string;
  messages: CnsAnswerMessage[];
  showMessages() {
    this.showMessagesFlag =  !this.showMessagesFlag; 
  }
}
