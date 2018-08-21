import { Component, OnInit, Input, PipeTransform, Pipe } from '@angular/core';
import { Nsi } from '../../../../../services/models/models';

@Pipe({
  name: "sort"
})
export class ArraySortPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

@Component({
  selector: 'app-rpm-constructive',
  templateUrl: './rpm-constructive.component.html',
  styleUrls: ['./rpm-constructive.component.css']
})



export class RpmConstructiveComponent implements OnInit {

  @Input() constructive: Nsi;
  constructor() { }

  ngOnInit() {
  }

}
