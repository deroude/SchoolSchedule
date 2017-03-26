import { ScheduleItem } from './../schedule_item';
import { Configuration } from './../configuration';
import { Constraint } from './../constraint';
export class ConcurrencyConstraint implements Constraint {

    constructor(private config: Configuration) { }

    check(item: ScheduleItem): boolean {
        return !this.config.schedule.some(s => s.slot.hourSlot.day === item.slot.hourSlot.day
            && s.slot.hourSlot.start < item.slot.hourSlot.end
            && s.slot.hourSlot.end > item.slot.hourSlot.start
            && (s.slot.participant.uuid === item.slot.participant.uuid
                || s.teacher.uuid === item.teacher.uuid
                || s.room.uuid === item.room.uuid)
        );
    }

}