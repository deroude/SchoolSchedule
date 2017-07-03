import { IdName } from './../domain/idname.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(source: any[], filter: string): IdName[] {
    if (!filter || filter.length === 0) return source;
    return source.filter(s => {
      if (s.name) {
        return s.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      }
      var re: boolean = false;
      var canSearch=false;
      for (var property in s) {
        if (s.hasOwnProperty(property) && s[property]["name"]) {
          re = re || (s[property]["name"].toLowerCase().indexOf(filter.toLowerCase()) > -1);
          canSearch=true;
        }
      }
      return !canSearch || re;
    });
  }
}