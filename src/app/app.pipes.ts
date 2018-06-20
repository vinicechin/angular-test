import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
    console.log('term', term);

    // return term ? items.filter(item => {
    //   if (item.title) {
    //     return item.title.contains(term);
    //   } else {
    //     return item.name.contains(term);
    //   }
    // }) : items
    return items;
  }
}

