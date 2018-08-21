import { Nsi } from '../models';

export class RpmAudit {
    id: string;
    auditType: Nsi;
    dateCreated: Date;
    auditors: Nsi[];
    isFinish: boolean;
}