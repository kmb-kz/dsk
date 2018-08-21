import { Component, OnInit, forwardRef, Input, EventEmitter, Output, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { File64 } from '../file/file.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FilesComponent),
  multi: true
};
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FilesComponent implements ControlValueAccessor {
  onChangeCallback: (_: File64[]) => void = () => { };

  files: File64[] = [];
  constructor(private renderer: Renderer) {

  }


  writeValue(obj: File64[]): void {
    this.files = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  delete(index: number) {
    this.files.splice(index, 1);
    this.onChangeCallback(this.files);
  }

  add() {
    var image = new File64();
    image.openSelector = true;
    if (!this.files)
      this.files = [];
    this.files.push(image);
    this.onChangeCallback(this.files);
  }
}
