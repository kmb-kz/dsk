import { Injectable } from "@angular/core";
import { Standard, StandardVersion } from "../../../../services/std/standard.service";


@Injectable()
export class StandardComponentModel {
    Id:string;
    Standard: Standard;
    Versions: Promise<StandardVersion[]>;
    Version: Promise<StandardVersion>;
    constructive:any;
}