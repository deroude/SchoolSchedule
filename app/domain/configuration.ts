import { Activity } from './activity';
import { CurriculumItem } from './curriculum_item';
import { ScheduleSlot } from './schedule_slot';
import { Participant } from './participant';
import { Teacher } from './teacher';
import { HourSlot } from './hour_slot';
import { Room } from './room';
import { ScheduleItem } from './schedule_item';
export class Configuration{
    schedule:ScheduleItem[]=[];
    scheduleTemplate:ScheduleSlot[]=[];
    rooms:Room[]=[];
    hourSlots:HourSlot[]=[];
    teachers:Teacher[]=[];
    participants:Participant[]=[];
    curriculum:CurriculumItem[]=[];
    activities:Activity[]=[];
}