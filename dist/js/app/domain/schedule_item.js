import { Util } from './util';
export var ScheduleItem = (function () {
    function ScheduleItem() {
        this.uuid = Util.id();
        this.locked = false;
    }
    return ScheduleItem;
}());
//# sourceMappingURL=schedule_item.js.map