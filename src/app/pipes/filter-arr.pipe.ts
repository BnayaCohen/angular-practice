import { Pipe, PipeTransform } from '@angular/core';

interface Item {
  [key: string | number]: any
}

@Pipe({
  name: 'filterArr'
})
export class FilterArrPipe implements PipeTransform {

  transform<T extends Item>(items: T[], itemProp: string, term: string): T[] {
    const regExp = new RegExp(term, 'i')
    return items.filter(item => regExp.test(item[itemProp]))
  }
}
