import { ScheduleItem } from './../schedule_item';
import { Configuration } from './../configuration';
import { Constraint } from './../constraint';
export class CurriculumConstraint implements Constraint {

    constructor(private config: Configuration) { }

    check(item: ScheduleItem): boolean {
        var ct:number=this.config.curriculum.find(c=>c.participant.uuid===item.slot.participant.uuid
            &&c.activity.uuid===item.activity.uuid).weeklyCount;
        return this.config.schedule.filter(s=>s.activity.uuid===item.activity.uuid
            &&s.slot.participant.uuid===item.slot.participant.uuid).length<ct;
    }

}