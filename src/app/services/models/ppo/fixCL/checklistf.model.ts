import { User } from "../../user";
import { Nsi } from "../../models";
import { CheckListFItem } from "./checklistf-item.model";

export class CheckListFix {
    id: string; 
    answerListId: string; 
    dateCreated: Date; 
    dateFinished: Date; 
    dateCorrected: Date; 
    isFinished: boolean; 
    isCorrected: boolean; 
    dateExpired: Date; 
    status: Nsi;
    filterStatus: number;
    inspector: User; 
    items: CheckListFItem[]; 
    statisticId: string; 
    object: Nsi; 
    auditType: Nsi; 
  }
  