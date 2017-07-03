import { Util } from './util';
import { Room } from './room';
import { Teacher } from './teacher';
import { Activity } from './activity';
import { ScheduleSlot } from './schedule_slot';
export class ScheduleItem{
    uuid:string=Util.id();
    slot:ScheduleSlot;
    activity:Activity;
    teacher:Teacher;
    room:Room;
    locked?:boolean=false;
    bad?:boolean=false;
}