import { Component, OnInit } from '@angular/core';
import { CnsAreaComponentModel } from '../../../../../cns-area.component';
import { CnsVisitLogService } from '../../../../../../../../services/cns/cns-visit-log.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ToasterComponent } from '../../../../../../../../components/toaster/toaster.component';
import { AuthService } from '../../../../../../../../services/common/auth.service';

@Component({
  selector: 'app-cns-acc-cert-list',
  templateUrl: './cns-acc-cert-list.component.html',
  styleUrls: ['./cns-acc-cert-list.component.css'],
  providers: [ToasterComponent]
})
export class CnsAccCertListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  contractId: string;
  certificates: any[] = [];
  constructor(public model: CnsAreaComponentModel, private service: CnsVisitLogService, private toaster: ToasterComponent, public auth: AuthService) { 
    
  }
  certificate: any;
  parameters: any[] = [];
  ngOnInit() {
    this.subscription = this.model.ContractId.subscribe(i => {
      if (i) {
        this.contractId = i;
        this.service.certificates(i)
          .subscribe(i => {
            this.certificates = i;
          });
      }
    });
  }
  onOk() {
    this.certificate.contractId = this.contractId;
    if (!this.certificate.id) {
      this.service.certificatePost(this.certificate).subscribe(i =>  {
        this.certificate.id = i;
        this.certificates.push(this.certificate);
        this.certificate = null;
      }, err => {if (err.error.message!="")
          this.toaster.popToast('error', 'Внимание!',  err.error.message); });
    } else {
      this.service.certificatePut(this.certificate).subscribe(i=>{
        this.certificate = null;
      });
    }
  }
  onCancel() {
    this.certificate = null;
  }
  add() {
    this.certificate = {};
  }
  edit(certificate: any) {
    this.certificate = certificate;
  }
  remove(certificate: any) {
    //this.certificate.deleted = true;
    this.service.certificateDelete(certificate.id).subscribe(i=>{
      this.ngOnInit();
    });
  }

}
