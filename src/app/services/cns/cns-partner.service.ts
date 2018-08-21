import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Nsi } from '../models/models';

@Injectable()
export class CnsPartnerService {

  url = environment.apiUrl + 'api/cns/partner';
  portalUrl = "http://cabinet.bi-group.org:8080";
  constructor(private client: HttpService) { }
  partners(): Observable<ResponseModel<Partner[]>> {
    return this.client.get(this.url);
  }
  searchFromPortal(bin: string): Observable<any> {
    return this.client.get(this.portalUrl + "/api/Nsi/Company/" + bin);
  }
  partner(id: string): Observable<ResponseModel<Partner[]>> {
    return this.client.get(this.url + '?id=' + id);
  }

  add(newPartner): Observable<ResponseModel<boolean>> {
    return this.client.post(this.url, newPartner);
  }
  edit(newPartner): Observable<string> {
    return this.client.putVoid(this.url, newPartner);
  }
  remove(newPartner): Observable<ResponseModel<boolean>> {
    return this.client.post(this.url + '/Remove', newPartner);
  }

  contracts(partnerId: string): Observable<ResponseModel<Contract[]>> {
    return this.client.get(this.url + "/contracts?partnerId=" + partnerId);
  }
  contractsByAreaPart(partnerId: string, areaPartId: string): Observable<ResponseModel<Contract[]>> {
    return this.client.get(this.url + "/contracts?partnerId=" + partnerId + '&areaPartId=' + areaPartId);
  }

  addContract(newContract): Observable<ResponseModel<boolean>> {
    return this.client.post(this.url + "/Contract", newContract);
  }

  editContract(newContract): Observable<string> {
    return this.client.put(this.url + "/Contract", newContract);
  }


  stagesVolume(contractId): Observable<StageVolume[]> {
    return this.client.get(this.url + '/stagesVolume/' + contractId);
  }
  updateStageVolume(contractId, stageId, volume): Observable<boolean> {
    return this.client.post(this.url + '/stageVolume', { contractId, stageId, volume });
  }

  contractConstructives(contractId): Observable<ContractConstructive[]> {
    return this.client.get(this.url + '/contractConstructives/' + contractId)
  }
  addContractConstructive(constructive: ContractConstructiveAdd): Observable<boolean> {
    return this.client.post(this.url + '/contractConstructive', { constructiveId: constructive.constructiveId, contractId: constructive.contractId, volume: constructive.volume, cost: constructive.cost });
  }
  updateContractConstructive(constructive: ContractConstructiveAdd): Observable<boolean> {
    return this.client.post(this.url + '/contractConstructive', { constructiveId: constructive.constructiveId, contractId: constructive.contractId, volume: constructive.volume, cost: constructive.cost });
  }
}

export class Partner {
  id: string;
  bin: string;
  name: string;
  contracts: Contract[];
}
export class ResponseModel<T> {
  success: boolean;
  message: string;
  result: T;
}

export class StageVolume {
  id: string;
  name: string;
  volume: number;
}
export class StageVolumePost {
  stageId: string;
  contractId: string;
  volume: number;
}
export class Contract {
  id: string;
  number: string;
  constructive: Nsi;
  //constructiveType: Nsi;
  dateStart: string;
  dateFinish: string;
  volume: string;
  price: string;
  areaPartId: string;
  descr: string;
}

export class ContractAdd {
  id: string;
  number: string;
  //constructiveId: string;
  //constructiveTypeId: string;
  partnerId: string;
  areaPartId: string;
  dateStart: string;
  dateFinish: string;
  volume: string;
  price: string;
  descr: string;
}

export class ContractConstructive {
  contract: Nsi;
  constructive: Nsi;
  volume: number;
  cost: number;
}

export class ContractConstructiveAdd {
  contractId: string;
  constructiveId: string;
  volume: number;
  cost: number;
}

