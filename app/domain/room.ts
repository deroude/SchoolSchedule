import { IdName } from './idname.interface';
import { Util } from './util';
import { Activity } from './activity';
export class Room implements IdName{
    uuid:string=Util.id();
    name:string;
    restrictedTo:Activity[];
}