import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter_custom_pipe',
  pure : false
  //this pure is bydefault true, that while be filtering the data/row but if we want to add a new row on click
  // of btn while doing filtering then we need to make this property -> pure : false
  //Note: This will cause performance degradtion
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
