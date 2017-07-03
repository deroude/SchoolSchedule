import { CurriculumItem } from './../curriculum_item';
import { ScheduleItem } from './../schedule_item';
import { Configuration } from './../configuration';
import { Constraint } from './../constraint';
export class CurriculumConstraint implements Constraint {

    constructor(private c: CurriculumItem[]) { }

    check(item: ScheduleItem, others: ScheduleItem[]): boolean {
        var ct = this.c.find(i => i.activity.uuid === item.activity.uuid
            && i.participant.uuid === item.slot.participant.uuid
            && i.teacher.uuid === item.teacher.uuid).weeklyCount;
        return others.filter(s => s.activity.uuid === item.activity.uuid
            && s.slot.participant.uuid === item.slot.participant.uuid).length < ct;
    }

}