import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { HttpService } from "../../../../services/common/http.service";

@Injectable()
export class RoughingService {
  url = environment.apiUrl + 'api/okk/area/parts/';
  constructor(private client: HttpService) { }
  apartments(partId: string) {
    return this.client.get<any[]>(this.url + 'apartments/' + partId);
  }
  rooms(porchId: string) {
    return this.client.get<any[]>(this.url + 'rooms/' + porchId);
  }
  constructives(roomId: string) {
    return this.client.get<any[]>(this.url + 'constructives/' + roomId);
  }
  standards(constructivesId: string) {
    return this.client.get<any[]>(this.url + 'standards/' + constructivesId);
  }
}