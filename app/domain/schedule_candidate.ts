import { CurriculumItem } from './curriculum_item';
import { ScheduleItem } from './schedule_item';
export class ScheduleCandidate{
    schedule:ScheduleItem[]=[];
    unschedulable:CurriculumItem[]=[];
}