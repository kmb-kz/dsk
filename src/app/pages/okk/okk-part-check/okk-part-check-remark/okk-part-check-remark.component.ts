import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OkkStandardService, Constructives, Standards } from '../../../../services/okk/okk-standard.service';


@Component({
  selector: 'app-okk-part-check-remark',
  templateUrl: './okk-part-check-remark.component.html',
  styleUrls: ['./okk-part-check-remark.component.css']
})
export class OkkPartCheckRemarkComponent implements OnInit {

 
  constructor(private route: ActivatedRoute, private service: OkkStandardService) {
  }

  ngOnInit() {
    
  }
}
