import { Nsi } from "../models";

export class ObjectsDetailModel {
    id: string;
    name: string;
    photoUrl: string;
    descr: string;
    developerName: string;
    dateCreated: Date;
    developer: Developer[];
    status: Status;
    blocksCount: number;
    floorsCount: number;
    porchsCount: number;
    dateFinishedConstruction: Date; 
    dateStartedConstruction: Date; 

}

export class Audits {
    id: string;
    auditType: Nsi[];
    dateCreated: Date;
    auditors: any[];
    isFinish: boolean;
}

export class Developer {
  id: string;
  bin: string;
  name: string;
  constructive: Constructive[];
  contracts: Contracts[];
}

export class Status {
  id: number;
  name: string;
}

export class Constructive {
  id: string;
  name: string;
}

export class Contracts {
  number: string;
  name: string;
  sum: number;
}
