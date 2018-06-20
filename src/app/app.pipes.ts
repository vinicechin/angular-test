import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
    term = term.toLowerCase();
    return term ? items.filter(item => {
      if (item.title) {
        return item.title.toLowerCase().includes(term);
      } else {
        return item.name.toLowerCase().includes(term);
      }
    }) : items;
  }
}

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(items: any[], sortedBy: string): any {
    console.log('sortedBy', sortedBy);
    return items.sort((a, b) => {return a[sortedBy] - b[sortedBy]});
  }
}
