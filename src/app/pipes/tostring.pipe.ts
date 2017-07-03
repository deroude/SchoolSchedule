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
@Pipe({ name: 'tostring' })
export class ToStringPipe implements PipeTransform {
    transform(object: any): string {
        if (!object) return "";
        if (typeof object.map == 'function') {
            return object.map(o => o.name ? o.name : o).join(",");
        }
        if (object.name) {
            return object.name;
        }
        return object;
    }
}