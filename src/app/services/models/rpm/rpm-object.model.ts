import { RpmAudit } from "./rpm-audit.model";

export class RpmObject {
    id: string;
    descr: string;
    newDescr: string
    developerName: string;
    name: string;
    photoUrl: string;
    dateCreated: Date;
    pkAudits: RpmAudit[];
    rkAudit: RpmAudit;
}

export class RpmAddObject {
    name: string;
    descr: string;
}

export class LLC {
    id: string;
    name: string;
    description: string;
    bin: string;
    director: string;
}