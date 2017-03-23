import { IdName } from './idname.interface';
import { Util } from './util';
export class Participant implements IdName{
    uuid:string=Util.id();
    name:string;
}