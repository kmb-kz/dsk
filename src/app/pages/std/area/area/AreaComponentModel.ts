import { Injectable } from "@angular/core";
import { Area, AreaConstructive, AreaStandard } from "../../../../services/std/area.service";

@Injectable()
export class AreaComponentModel {
    AreaId: string;
    Model: Promise<Area>;
    Standards: Promise<AreaConstructive[]>;
    AreaStandardId: string;
    Standard: Promise<AreaStandard>;
    ChangeRequestStatus: string;
}