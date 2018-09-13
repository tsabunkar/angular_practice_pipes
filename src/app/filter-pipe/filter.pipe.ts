import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter_custom_pipe'
})
export class FilterPipe implements PipeTransform {

  //!showing specific server list which is entered in the text box
  /*   transform(value: any, filterString: string, propertyName: string): any {
      if (value.length === 0 ) {//value can be string , array, any data
        return value
      }
      const resultFilteredArray = [];
      for (const item of value) {
  
        if (item[propertyName] == filterString) {
          resultFilteredArray.push(item);
        }
      }
      return resultFilteredArray
    } */

  //!showing all server list and then filtering it
  transform(value: any, filterString: string, propertyName: string): any {
    if (value.length === 0 || filterString === '') {//value can be string , array, any data
      return value
    }
    const resultFilteredArray = [];
    for (const item of value) {

      if (item[propertyName] == filterString) {
        resultFilteredArray.push(item);
      }
    }
    return resultFilteredArray
  }

}
