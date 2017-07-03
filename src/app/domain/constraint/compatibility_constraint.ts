import { Configuration } from './../configuration';
import { ScheduleItem } from './../schedule_item';
import { Constraint } from './../constraint';
export class CompatibilityConstraint implements Constraint {

    constructor() { }

    check(item: ScheduleItem,others:ScheduleItem[]): boolean {
        return item.teacher.assignableFor.some(a => a.uuid === item.activity.uuid)
            && (item.room.restrictedTo.length === 0 || item.room.restrictedTo.some(r => r.uuid === item.activity.uuid));
    }

}