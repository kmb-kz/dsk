import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../models/models';
import { ResponseModel } from '../models/common/responseModel';
import { RpmRemarkChecklistComponentModel } from '../../pages/rpm/rpmremark/rpm-remark-checklist/rpm-remark-checklist.component';
import { File64 } from '../../pages/common/file/file.component';

@Injectable()
export class RpmRemarkService {

  private url: string;
  constructor(private http: HttpService) {
    this.url = environment.apiUrl + 'api/rpm/Remarks';
  }

  getAreaParts(parentId, id): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/AreaParts?parentId=' + parentId + '&objectId=' + id);
  }
  getConstructives(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/Constructives');
  }
  getCriticalites(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/Criticalites');
  }
  getStatuses(): Observable<Nsi[]> {
    return this.http.get(this.url + '/Statuses');
  }

  getRemarkTypes(parentId, constructiveId): Observable<ResponseModel<any>> {
    if (parentId != null) {
      return this.http.get(this.url + '/GetRemarkTypes?parentId=' + parentId + '&constructiveId=' + constructiveId);
    } else {
      return this.http.get(this.url + '/GetRemarkTypes?constructiveId=' + constructiveId);
    }
  }
  addRpmRemark(model: any): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddRemark', model);
  }
  getCheckListId(id: string): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetChecklist?objectId=' + id);
  }
  getRemarksList(
    areaId: string, areaPartId: string, selectedConstructiveId = null, selectedCriticalityId = null,
    selectedStatusId = null): Observable<ResponseModel<any>> {
    return this.http.get
      (this.url + '/GetRemarks/' + areaId + '/' + areaPartId + '/' + selectedConstructiveId
      + '/' + selectedCriticalityId + '/' + selectedStatusId);
  }
  getRemarkItem(remarkId: string): Observable<any> {
    return this.http.get(this.url + '/GetRemark/' + remarkId);
  }
  addRemarkType(model: any): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/AddRemarkType', model);
  }
  addAnswer(model: RemarkAnswerAddViewModel): Observable<any> {
    return this.http.post(this.url + '/AddAnswer', model);
  }
  getBreakdown(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/Breakdown');
  }
  addBreakdown(model: Nsi): Observable<any> {
    return this.http.post(this.url + '/AddBreakdown', model);
  }
  withdrawRemark(id: string): Observable<ResponseModel<any>> {
    return this.http.post(this.url + '/WithdrawRemark/' + id, null);
  }

  

  getRemarksA(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksA');
  }
  getRemarksB(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksB');
  }
  getRemarksC(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksC');
  }
  getRemarksD(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksD');
  }
  getRemarksE(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksE');
  }
  getRemarksF(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksF');
  }
  getRemarksG(): Observable<ResponseModel<any>> {
    return this.http.get(this.url + '/GetRemarksF');
  }




  /*
 redirectRemark(model: RemarkAnswerAddViewModel): Observable<boolean> {
   return this.http.post(this.url + '/AddAnswer', model);
 }
 
 addSaveDecline(model: RemarkAnswerAddViewModel): Observable<ResponseModel<any>> {
   return this.http.post(this.url + '/AddAnswer', model);
 }
 redirectRemark(model: RemarkAnswerAddViewModel): Observable<boolean> {
   return this.http.post(this.url + '/AddAnswer', model);
 }

 addSetDateCorrected(model: RemarkAnswerAddViewModel): Observable<ResponseModel<any>> {
   return this.http.post(this.url + '/AddAnswer', model);
 }

 doneCheckList(model: RemarkAnswerAddViewModel): Observable<ResponseModel<any>> {
   return this.http.post(this.url + '/AddAnswer', model);
 }
 correctedAnswerItem(model: RemarkAnswerAddViewModel): Observable<ResponseModel<any>> {
   return this.http.post(this.url + '/AddAnswer', model);
 }
 reworkCheckList(model: RemarkAnswerAddViewModel): Observable<ResponseModel<any>> {
   return this.http.post(this.url + '/AddAnswer', model);
 }*/
}

export class RemarkList {
  id: string;
  dateCreated: Date;
}

export class RemarkItem {
  id: string;
  isCritical: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  remark: string;
  constructive: Nsi;
  criticality: Nsi;
  status: Nsi;
  remarkType: Nsi;
  userInfo: string;
  criticaled: boolean;
}

export class RemarkAnswerItem {
  id: string;
  comment: string;
  statusId: number;
  dateOfCorrectionStart: Date;
  dateOfCorrectionEnd: Date;
}

export class CheckListCorrectedModel {
  answerItemId: string;
  comment: string;
}

export class CheckListDoneModel {
  answerItemId: string;
  files: File64[];
  comment: string;
}


export class RemarkAnswerAddViewModel {
  itemId: string;
  answerListId: string;
  photos: File64[];
  statusId: number;
  comment: string;
  dateStart: Date;
  dateFinish: Date;
  isNew: boolean = false;
  receiverUserAccount: string;
  breakdownId: string;
  isReview: boolean = false;
}


export class DateCorrectedModel {
  answerItemId: string;
  checkListItemId: string;
  comment: string;
  dateOfCorrectionStartStr: string;
  dateOfCorrectionEndStr: string;
  datediff: string;
}

export class Decline {
  AnswerItemId: string;
  ItemId: string;
  Comment: string;
}

export class Remarks {
  id: string;
  remarkType: Nsi;
  criticality: Nsi[];
  dateCreated: Date;
  status: Nsi[];
  constructive: any;
  cntDeniedMO: number;

}

export class ChildLocation {
  id: string;
  areaId: string;
  name: string;
  label: string;
}

