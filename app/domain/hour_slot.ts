import { Util } from './util';
export class HourSlot{
    uuid:string=Util.id();
    start:string;
    end:string;
    days:string[];
}