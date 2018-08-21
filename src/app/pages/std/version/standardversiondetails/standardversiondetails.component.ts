import { Component, OnInit } from '@angular/core';
import { VersionResponseModel, VersionService } from '../../../../services/std/version.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-standardversiondetails',
  templateUrl: './standardversiondetails.component.html',
  styleUrls: ['./standardversiondetails.component.css']
})
export class StandardversiondetailsComponent implements OnInit {
  version: VersionResponseModel = new VersionResponseModel();
  validImages:any[] = [];
  invalidImages:any[] = [];
  constructor(private service: VersionService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.get(id).subscribe(i => {
      this.version = i;
      console.info('version');
      console.info(this.version);
      this.validImages = i.validImages.map(i=> { return {source: environment.apiUrl + i ,alt:'', title:''};})
      this.invalidImages = i.invalidImages.map(i=> { return {source: environment.apiUrl + i ,alt:'', title:''};})
    });
  }

}
