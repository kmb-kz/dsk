import { Nsi } from "../../models";
import { Picture } from "./picture.model";
import { Statistic } from "../../../../pages/ppo/checklistdetail/checklistdetail.component";

export class CheckListFItem {
    id: string; 
    name: string; 
    answerItemId: string; 
    userAnswer: Nsi;
    lvl: string; 
    ord: string; 
    issetChildren: boolean; 
    issetComment: boolean;
    issetPhotos: boolean; 
    comment: string; 
    standartName: string; 
    standardAcceptedDate: Date;
    pictures: Picture[] = [];
    dateChecked: Date; 
    dateCorrected: Date; 
    grLetterUrl: string; 
    statistics: Statistic; 
    childrens: CheckListFItem[]; 
  } 