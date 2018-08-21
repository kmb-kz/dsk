import { Component, OnInit, forwardRef, Input, EventEmitter, Output, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileComponent),
  multi: true
};
export class File64 {
  base64String: string;
  fileName: string;
  size: number;
  openSelector: boolean;
}
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FileComponent implements ControlValueAccessor, OnInit {
  @ViewChild('file') fileElement: ElementRef;
  ngOnInit(): void {

  }
  @Output() delete = new EventEmitter();
  onChangeCallback: (_: File64) => void = () => { };

  file64 = new File64();
  element: string;
  constructor(private renderer: Renderer) {
    this.element = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  click() {
    this.onChangeCallback(new File64());
    this.file64 = null;// new File64();
    this.delete.emit();
  }
  change($event): void {
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      var model = new File64();
      model.base64String = myReader.result.split(',')[1];
      model.fileName = file.name;
      model.size = file.size;
      this.onChangeCallback(model);
      this.file64 = model;
    }
    myReader.onerror = e => {
      console.log(e);
    }
    myReader.readAsDataURL(file);
  }

  writeValue(obj: File64): void {
    this.file64 = obj;
    if (this.file64 && this.file64.openSelector) {
      this.file64.openSelector = false;
      let event = new MouseEvent('click', { bubbles: true });
      this.fileElement.nativeElement.dispatchEvent(event);
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
