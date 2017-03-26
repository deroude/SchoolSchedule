import { Util } from './util';
export var DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export var HourSlot = (function () {
    function HourSlot() {
        this.uuid = Util.id();
    }
    return HourSlot;
}());
export var HourSlotFactory = (function () {
    function HourSlotFactory() {
    }
    HourSlotFactory.make = function (start, end, day) {
        var d = 24 * 60 * DAYS.indexOf(day);
        var re = new HourSlot();
        var s = start.split(":");
        re.start = d + Number(s[0]) * 60 + Number(s[1]);
        s = end.split(":");
        re.end = d + Number(s[0]) * 60 + Number(s[1]);
        re.day = day;
        re.name = start + "-" + end;
        return re;
    };
    return HourSlotFactory;
}());
//# sourceMappingURL=hour_slot.js.map