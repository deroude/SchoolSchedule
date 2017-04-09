import { DAYS } from './hour_slot';
export var ScheduleCandidate = (function () {
    function ScheduleCandidate() {
        this.schedule = [];
        this.unschedulable = [];
    }
    ScheduleCandidate.prototype.getScore = function () {
        if (this.score)
            return this.score;
        var score = this.unschedulable.length * 100000;
        var prev;
        this.schedule.sort(function (a, b) {
            if (a.slot.participant.uuid === b.slot.participant.uuid) {
                if (a.slot.hourSlot.day !== b.slot.hourSlot.day) {
                    return DAYS.indexOf(a.slot.hourSlot.day) - DAYS.indexOf(b.slot.hourSlot.day);
                }
                else {
                    return a.slot.hourSlot.start - b.slot.hourSlot.start;
                }
            }
            else {
                if (a.slot.participant.uuid > b.slot.participant.uuid) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        });
        this.schedule.forEach(function (s) {
            if (prev && s.slot.participant.uuid === prev.slot.participant.uuid
                && s.slot.hourSlot.day === prev.slot.hourSlot.day
                && s.slot.hourSlot.start - prev.slot.hourSlot.end > 40) {
                score += 10;
                s.bad = true;
            }
            prev = s;
        });
        this.schedule.sort(function (a, b) {
            if (a.teacher.uuid === b.teacher.uuid) {
                if (a.slot.hourSlot.day !== b.slot.hourSlot.day) {
                    return DAYS.indexOf(a.slot.hourSlot.day) - DAYS.indexOf(b.slot.hourSlot.day);
                }
                else {
                    return a.slot.hourSlot.start - b.slot.hourSlot.start;
                }
            }
            else {
                if (a.teacher.uuid > b.teacher.uuid) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        });
        prev = null;
        this.schedule.forEach(function (s) {
            if (prev && s.teacher.uuid === prev.teacher.uuid
                && s.slot.hourSlot.day === prev.slot.hourSlot.day
                && s.slot.hourSlot.start - prev.slot.hourSlot.end > 40) {
                s.bad = true;
                score++;
            }
            prev = s;
        });
        this.score = score;
        return score;
    };
    return ScheduleCandidate;
}());
//# sourceMappingURL=schedule_candidate.js.map