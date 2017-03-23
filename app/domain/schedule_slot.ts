import { Util } from './util';
import { HourSlot } from './hour_slot';
import { Participant } from './participant';
export class ScheduleSlot{
    uuid:string=Util.id();
    participant:Participant;
    hourSlot:HourSlot;

    public overlaps(other:ScheduleSlot):boolean{
        return this.hourSlot.start<other.hourSlot.end&&this.hourSlot.end>other.hourSlot.start;
    }
}