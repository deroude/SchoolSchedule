import { ScheduleItem } from './schedule_item';
export interface Constraint {
    check(item: ScheduleItem,others:ScheduleItem[]): boolean;
}