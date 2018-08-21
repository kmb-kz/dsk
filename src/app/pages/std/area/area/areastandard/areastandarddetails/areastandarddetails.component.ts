import { Component, OnInit } from '@angular/core';
import { AreaComponentModel } from '../../AreaComponentModel';
import { AuthService } from '../../../../../../services/common/auth.service';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-areastandarddetails',
  templateUrl: './areastandarddetails.component.html',
  styleUrls: ['./areastandarddetails.component.css']
})
export class AreastandarddetailsComponent implements OnInit {
  apiUrl = environment.apiUrl;
  validImages:any[] = [];
  invalidImages:any[] = [];
  constructor(public model: AreaComponentModel, public auth:AuthService) {
    
   }

  ngOnInit() {
    this.model.Standard.then(i=>{
      this.validImages = i.validImages.map(j=> { return {source: environment.apiUrl + j ,alt:'', title:''};})
      this.invalidImages = i.invalidImages.map(j=> { return {source: environment.apiUrl + j ,alt:'', title:''};})
    });
  }

}
