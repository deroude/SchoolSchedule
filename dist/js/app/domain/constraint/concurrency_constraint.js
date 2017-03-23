export var ConcurrencyConstraint = (function () {
    function ConcurrencyConstraint(config) {
        this.config = config;
    }
    ConcurrencyConstraint.prototype.check = function (item) {
        return this.config.schedule.some(function (s) { return s.slot.overlaps(item.slot)
            && (s.slot.participant.uuid === item.slot.participant.uuid
                || s.teacher.uuid === item.teacher.uuid
                || s.room.uuid === item.room.uuid); });
    };
    return ConcurrencyConstraint;
}());
//# sourceMappingURL=concurrency_constraint.js.map