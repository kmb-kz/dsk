import { Picture } from "../ppo/fixCL/picture.model";
import { Nsi } from "../models";
import { User } from "../user";

export class ObjectsModel {
    id: string;
    name: string;
    photoUrl: Picture[];
    descr: string;
    developerName: string;
    dateCreated: Date;
    grLetters: string;
    rkAudit: Audits[];
    pkAudits: Audits[];
    ppoReport: string;
    inspectors: User[];
    leaders: User[];
    templateChecklist: Nsi[];
    isCanCreateRk: boolean;
    isCanCreatePk: boolean;
    isCanDownloadReport: boolean;
}


export class Audits {
    id: string;
    auditType: Nsi[];
    dateCreated: Date;
    auditors: any[];
    isFinish: boolean;
}

