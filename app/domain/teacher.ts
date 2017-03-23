import { Util } from './util';
import { Activity } from './activity';
export class Teacher{
    uuid:string=Util.id();
    name:string;
    assignableFor:Activity[];
}