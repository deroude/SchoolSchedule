import { Util } from './util';
import { HourSlot } from './hour_slot';
import { Participant } from './participant';
export class ScheduleSlot {
    uuid: string = Util.id();
    participant: Participant;
    hourSlot: HourSlot;
}