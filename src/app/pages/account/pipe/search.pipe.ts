import { Pipe, PipeTransform } from '@angular/core';
import {AdUserInfo} from '../../../services/models/AdUserInfo';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filter: AdUserInfo): any {
    return null;
  }

}
