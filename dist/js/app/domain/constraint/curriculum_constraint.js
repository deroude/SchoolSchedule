export var CurriculumConstraint = (function () {
    function CurriculumConstraint(config) {
        this.config = config;
    }
    CurriculumConstraint.prototype.check = function (item) {
        var ct = this.config.curriculum.find(function (c) { return c.participant.uuid === item.slot.participant.uuid
            && c.activity.uuid === item.activity.uuid; }).weeklyCount;
        return this.config.schedule.filter(function (s) { return s.activity.uuid === item.activity.uuid
            && s.slot.participant.uuid === item.slot.participant.uuid; }).length < ct;
    };
    return CurriculumConstraint;
}());
//# sourceMappingURL=curriculum_constraint.js.map