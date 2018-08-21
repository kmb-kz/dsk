import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../../../services/data.service';
import 'rxjs/add/operator/switchMap';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
import { AuthService } from '../../../services/common/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-grletters',
  templateUrl: 'grletters.component.html',
  styleUrls: ['grletters.component.css'],
  providers: [ToasterComponent]
})
export class GrlettersComponent implements OnInit {

  apiUrl: string;
  areaId: string;
  errorMessage = '';
  objectInfo: ObjectIndo;
  role: string;
  today: Date; 

  constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService,
    private service: DataService, private toaster: ToasterComponent) { }

  ngOnInit() {
    this.areaId = this.route.snapshot.paramMap.get('id');
    this.getObjectLetter(this.areaId);
    this.role = localStorage.getItem('roles');
    this.apiUrl = environment.apiUrl;
  }
  addAudit(grLetterId, areaId) {
    this.service.addAudit(grLetterId).subscribe(
      data => {
        if (data.success) {
          this.getObjectLetter(areaId);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );

  }

  requestAudit(auditId, areaId) {
    this.service.requestAudit(auditId).subscribe(
      data => {
        if (data.success) {
          this.getObjectLetter(areaId);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  checkResultAudit(auditId, isCorrect, areaId) {
    this.service.addAuditResult(auditId, isCorrect).subscribe(
      data => {
        if (data.success) {
          this.getObjectLetter(areaId);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getObjectLetter(areaId) {
    this.service.getObjectLetterInfo(areaId).subscribe(
      data => {
        if (data.success) {
          this.objectInfo = data.result;
        }

      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );

  }

}


export class ObjectIndo {
  id: string;
  descr: string;
  developerName: string;
  name: string;
  ppoReport: string;
  dateCreated: Date;
  templateChecklist: string;
  grLetters: GrLetter[];
}

export class GrLetter {
  id: string;
  autor: string;
  itemName: string;
  checklistId: string;
  checklistTitle: string;
  dateOfCorrected: Date;
  fileUrl: string;
  isCorrect: boolean;
  audits: Audit[];

}

export class Audit {
  id: string;
  dateCreated: Date;
  isCorrected: boolean;
  dateRequested: Date;
  isRequestedNew: boolean;

}