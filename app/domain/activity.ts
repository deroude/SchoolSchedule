import { IdName } from './idname.interface';
import { Util } from './util';
export class Activity implements IdName{
    uuid:string=Util.id();
    name:string;
}