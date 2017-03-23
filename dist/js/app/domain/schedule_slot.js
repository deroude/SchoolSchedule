import { Util } from './util';
export var ScheduleSlot = (function () {
    function ScheduleSlot() {
        this.uuid = Util.id();
    }
    ScheduleSlot.prototype.overlaps = function (other) {
        return this.hourSlot.start < other.hourSlot.end && this.hourSlot.end > other.hourSlot.start;
    };
    return ScheduleSlot;
}());
//# sourceMappingURL=schedule_slot.js.map