import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-area-item',
  templateUrl: './area-item.component.html',
  styleUrls: ['./area-item.component.css']
})
export class AreaItemComponent implements OnInit {
  @Input() area: any;
  host = environment.apiUrl;

  constructor() { }

  ngOnInit() {
  }

}
