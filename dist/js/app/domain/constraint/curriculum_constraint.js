export var CurriculumConstraint = (function () {
    function CurriculumConstraint(c) {
        this.c = c;
    }
    CurriculumConstraint.prototype.check = function (item, others) {
        var ct = this.c.find(function (i) { return i.activity.uuid === item.activity.uuid
            && i.participant.uuid === item.slot.participant.uuid
            && i.teacher.uuid === item.teacher.uuid; }).weeklyCount;
        return others.filter(function (s) { return s.activity.uuid === item.activity.uuid
            && s.slot.participant.uuid === item.slot.participant.uuid; }).length < ct;
    };
    return CurriculumConstraint;
}());
//# sourceMappingURL=curriculum_constraint.js.map