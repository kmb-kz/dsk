import { Component, OnInit } from '@angular/core';
import { StandardComponentModel } from './StandardComponentModel';
import { ActivatedRoute } from '@angular/router';
import { StandardService } from '../../../../services/std/standard.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css'],
  providers:[StandardComponentModel]
})
export class StandardComponent implements OnInit {

  constructor(public model: StandardComponentModel, private route:ActivatedRoute,
    private service: StandardService) { }

  ngOnInit() {
    this.model.Id = this.route.snapshot.paramMap.get('id');
    this.service.get(this.model.Id).then(x=>{
      this.model.Standard = x;
    });
  }

}
