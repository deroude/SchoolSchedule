import { IdName } from './idname.interface';
import { Util } from './util';
import { Activity } from './activity';
export class Teacher implements IdName{
    uuid:string=Util.id();
    name:string;
    assignableFor:Activity[]=[];
}