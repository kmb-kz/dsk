import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RpmObjectService } from '../../../../../../services/rpm/rpm-object.service';

@Component({
  selector: 'app-rpm-responsible',
  templateUrl: './rpm-responsible.component.html',
  styleUrls: ['./rpm-responsible.component.css']
})
export class RpmResponsibleComponent implements OnInit {

  @Input() areaId: string;
  userList: any[];
  constructor(private route: ActivatedRoute, private services: RpmObjectService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.services.getAreaUsers(this.areaId).subscribe(
      i => {
        if (i.success) {
          this.userList = i.result;
          console.log(i);
        }
      }
    );
  }

}
