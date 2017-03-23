import { IdName } from './../domain/idname.interface';
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(source:any[],filter:string): IdName[] {
      if(!filter||filter.length===0) return source;
      return source.filter(s=>!s.name||s.name.toLowerCase().indexOf(filter.toLowerCase())>-1);
  }
}