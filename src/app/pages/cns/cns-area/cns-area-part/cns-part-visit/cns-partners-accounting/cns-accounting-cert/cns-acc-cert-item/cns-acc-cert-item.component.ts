import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CnsVisitLogService } from '../../../../../../../../services/cns/cns-visit-log.service';
import { forEach } from '@angular/router/src/utils/collection';
import { AdUserInfo } from '../../../../../../../../services/models/AdUserInfo';
import { UsersService } from '../../../../../../../../services/users/users.service';

@Component({
  selector: 'app-cns-acc-cert-item',
  templateUrl: './cns-acc-cert-item.component.html',
  styleUrls: ['./cns-acc-cert-item.component.css']
})
export class CnsAccCertItemComponent implements OnInit {
  @Input() certificate: any;
  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();
  onSaveMoment: boolean = false; 
  parameters = [];
  @Input() contractId: string;
  constructor(private service: CnsVisitLogService, private user: UsersService) {
  }
  ngOnInit() {
    this.service.contractConstructives(this.contractId).subscribe(i => {
      this.parameters = i;
    });
    this.loadPartners();
    this.certificate.signers = [];
  }
  onSave() {
    this.onSaveMoment = true; 
    this.certificate.contractId = this.contractId;
    this.certificate.parameters = [];
    for (let i = 0; i < this.parameters.length; i++) {
      for (let j = 0; j < this.parameters[i].parameters.length; j++) {
        if (this.parameters[i].parameters[j].selected) {
          this.certificate.parameters.push(this.parameters[i].parameters[j].id);
        }
      }
    }
   this.pushPartner();
    this.ok.emit();
  }
  onSelectedUser(event: AdUserInfo, positionId: number) {
    if (event.accountName != null && event.accountName != "") {
      console.info("ok");
      let user = new CertificateSigner();
      user.accountName = event.accountName;
      user.positionId = positionId;
      this.certificate.signers.push(user);
    }

  }
  pushPartner(){
    let user = new CertificateSigner();
    user.accountName = this.partner;
    user.positionId = 1;
    this.certificate.signers.push(user);
  }
  partner:any;
  partners:any;
  loadPartners() {
    this.user.getByRoles("partner").subscribe(x=>{
      this.partners = x.result;
    });
  }
  constuctiveChange(item, $event) {
    item.selected = $event.target.checked;
    for (let j = 0; j < item.parameters.length; j++) {
      item.parameters[j].selected = $event.target.checked;
    }
    //this.ok.emit();
  }
  paramChange(param, $event) {
    param.selected = $event.target.checked;
  }
  onCancel() {
    this.cancel.emit();
  }
}

export class CertificateSigner {
  accountName: string;
  positionId: number;
}