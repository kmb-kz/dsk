import { Component, OnInit, forwardRef, Input, EventEmitter, Output, ViewChild, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileOneComponent),
  multi: true
};
export class File64 {
  base64String: string;
  fileName: string;
  size: number;
  openSelector: boolean;
}
@Component({
  moduleId: module.id,
  selector: 'app-file-one',
  templateUrl: 'file-one.component.html',
  styleUrls: ['file-one.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class FileOneComponent implements ControlValueAccessor, OnInit {
  @ViewChild('file') fileElement: ElementRef;
  @Input() disFile: boolean = false;


  ngOnInit(): void {
  }


  onChangeCallback: (_: File64) => void = () => { };
  file64 = new File64();
  model = new File64();
  element: string;
  constructor(private renderer: Renderer2) {

  }

  change($event): void {
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.model = new File64();
      this.model.base64String = myReader.result.split(',')[1];
      this.model.fileName = file.name;
      this.model.size = file.size;
      this.onChangeCallback(this.model);
    };
    myReader.onerror = e => {
      console.log(e);
    };
    myReader.readAsDataURL(file);
  }

  writeValue(obj: File64): void {
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
