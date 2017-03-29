export var CompatibilityConstraint = (function () {
    function CompatibilityConstraint() {
    }
    CompatibilityConstraint.prototype.check = function (item, others) {
        return item.teacher.assignableFor.some(function (a) { return a.uuid === item.activity.uuid; })
            && (item.room.restrictedTo.length === 0 || item.room.restrictedTo.some(function (r) { return r.uuid === item.activity.uuid; }));
    };
    return CompatibilityConstraint;
}());
//# sourceMappingURL=compatibility_constraint.js.map