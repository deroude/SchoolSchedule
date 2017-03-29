export var ConcurrencyConstraint = (function () {
    function ConcurrencyConstraint() {
    }
    ConcurrencyConstraint.prototype.check = function (item, others) {
        return !others.some(function (s) { return s.slot.hourSlot.day === item.slot.hourSlot.day
            && s.slot.hourSlot.start < item.slot.hourSlot.end
            && s.slot.hourSlot.end > item.slot.hourSlot.start
            && (s.slot.participant.uuid === item.slot.participant.uuid
                || s.teacher.uuid === item.teacher.uuid
                || s.room.uuid === item.room.uuid); });
    };
    return ConcurrencyConstraint;
}());
//# sourceMappingURL=concurrency_constraint.js.map