import { ScheduleItem } from './schedule_item';
export interface Constraint {
    check(item: ScheduleItem): boolean;
}