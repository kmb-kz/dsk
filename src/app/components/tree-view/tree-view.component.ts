import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RpmRemarkService } from '../../services/rpm/rpm-remark.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nsi } from '../../services/models/models';
import { ToasterComponent } from '../toaster/toaster.component';
import { TreeNode } from 'primeng/primeng';
import { Location } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-tree-view',
  templateUrl: 'tree-view.component.html',
  styleUrls: ['tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  remarkChild: Nsi[];
  @Input() areaId: string;
  @Output() areaPartId = new EventEmitter<string>();
  @Output() issetChildren = new EventEmitter<boolean>();
  @Output() infoSelect = new EventEmitter<any>();

  _areaPartId: string;
  _issetChildren: boolean = true;
  _infoSelect: any;
  selectedFile: any;
  constructor(private route: ActivatedRoute, private router: Router,
    private location: Location, private service: RpmRemarkService,
    private toaster: ToasterComponent) {
      localStorage.removeItem('treeViewPartId');
     }

  ngOnInit() {
    localStorage.removeItem('treeViewPartId');
    this.loadAreaParts(this.areaId, '');
  }

  onNodeSelect(event) {
    this._areaPartId = event.node.id;
    this._infoSelect = event.node;

    this.areaPartId.emit(this._areaPartId);
    this.infoSelect.emit(this._infoSelect);
    localStorage.setItem('treeViewPartId', this._areaPartId);
    if (event.node.children === null) {
      this._issetChildren = false;
    } else {
      //localStorage.removeItem('treeViewPartId');
      this._issetChildren = true;
    }
    this.issetChildren.emit(this._issetChildren);
    // if (event.node.children == null) {
    //   this.areaPartId.emit(this._areaPartId);
    //   this.issetChildren.emit(this._issetChildren);
    // }

  }

  loadAreaParts(id: string, parentId?: string) {
    this.service.getAreaParts(parentId, id).subscribe(
      data => {
        if (data.success) {
          this.remarkChild = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
}
