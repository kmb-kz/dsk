import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterialVolume } from '../cns-point-materials.component';
import { CnsAnswerService } from '../../../../../../../../services/cns/cns-answer.service';

@Component({
  selector: 'app-cns-point-material',
  templateUrl: './cns-point-material.component.html',
  styleUrls: ['./cns-point-material.component.css']
})
export class CnsPointMaterialComponent implements OnInit {
  @Input() volume: MaterialVolume;
  @Output() removeMaterials = new EventEmitter();
  constructor(private answerService: CnsAnswerService) { }

  ngOnInit() {
  }

  editMode: boolean = false;
  enableEdit(enable: boolean) {
    this.editMode = enable;
  }
  update() {
    this.answerService.materialVolumePut(this.volume).subscribe(
      x => {
        if (x.success) {
          this.editMode = false;
        }
      });
  }


  remove() {
    this.answerService.materialRemove(this.volume.id).subscribe(
      i => {
        if (i.success) {
          this.removeMaterials.emit();
        }
      }
    );
  }


}
