import { Component, OnInit, Injectable } from '@angular/core';
import { TsuArea, TsuAreasService } from "../../services/tsu/tsu-areas.service";
import { TsuRemarksService } from "../../services/tsu/tsu-remarks.service";

@Component({
  selector: 'app-tsu',
  templateUrl: './tsu.component.html',
  styleUrls: ['./tsu.component.css'],
  providers: [TsuAreasService, TsuRemarksService ]
})
export class TsuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable()
export class TsuAreaComponentModel {
	Id: string;
	Area: Promise<TsuArea>;
	PartId: string;
}