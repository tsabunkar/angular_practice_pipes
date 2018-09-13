import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //Pipe is a decorator
  name: 'shorten_custompipe'
})
export class ShortenPipe implements PipeTransform {

  /*  transform(value: any, args?: any): any {
     if (value.length > 10) {
       return value.substr(0, 10) + " ..";//string we want to shortend (from 0 character to 10 character)
     }
     return value
   } */

  //! Paramterzing the custom pipe
  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substr(0, limit) + " ..";
    }
    return value;
  }

} 