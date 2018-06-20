import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
    return term ? items.filter(item => {
      if (item.title) {
        return item.title.toLowerCase().includes(term);
      } else {
        return item.name.toLowerCase().includes(term);
      }
    }) : items;
  }
}

