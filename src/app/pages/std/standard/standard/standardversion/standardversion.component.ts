import { Component, OnInit } from '@angular/core';
import { StandardComponentModel } from '../StandardComponentModel';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { VersionService } from '../../../../../services/std/version.service';
import { StandardService } from '../../../../../services/std/standard.service';

@Component({
  selector: 'app-standardversion',
  templateUrl: './standardversion.component.html',
  styleUrls: ['./standardversion.component.css']
})
export class StandardversionComponent implements OnInit {
  validImages:any[] = [];
  invalidImages:any[] = [];
  constructor(public model: StandardComponentModel, private route: ActivatedRoute,
  private service:StandardService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.model.Version = this.service.version(id).toPromise();
    this.model.Version.then(i => {
      this.validImages = i.validImages.map(j=> { return {source: environment.apiUrl + j.base64String ,alt:'', title:''};})
      this.invalidImages = i.invalidImages.map(j=> { return {source: environment.apiUrl + j.base64String ,alt:'', title:''};})
    });
  }

}
