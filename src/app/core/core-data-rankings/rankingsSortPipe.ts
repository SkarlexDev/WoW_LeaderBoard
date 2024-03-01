import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKeys'
})
export class SortByKeysPipe implements PipeTransform {
  transform(value: any): string[] {
    if (!value || typeof value !== 'object') {
      return [];
    }

    return Object.keys(value).sort((a, b) => {
      const order = ['S', 'A', 'B', 'C', 'D', 'F'];
      return order.indexOf(a) - order.indexOf(b);
    });
  }
}
