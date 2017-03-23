import { Util } from './util';
import { Activity } from './activity';
export class Room{
    uuid:string=Util.id();
    name:string;
    restrictedTo:Activity[];
}