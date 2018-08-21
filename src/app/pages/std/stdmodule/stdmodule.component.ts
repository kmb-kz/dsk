import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-stdmodule',
  templateUrl: './stdmodule.component.html',
  styleUrls: ['./stdmodule.component.css']
})
export class StdmoduleComponent implements OnInit {

  constructor(private app: AppComponent) {
    app.setPageWithoutHeader(false);
    app.setPageWithoutSidebar(false);
   }

  ngOnInit() {
  }

}
