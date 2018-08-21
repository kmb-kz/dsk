import { Component, OnInit, Input } from '@angular/core';
import { AuthService, Claims } from '../services/common/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() page_sidebar_transparent: boolean;

  rolesDescr: string;
  userName: string;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.rolesDescr = this.auth.rolesDescr();
    this.userName = this.auth.username();
  }

}
