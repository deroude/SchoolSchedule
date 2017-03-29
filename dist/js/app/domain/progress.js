export var Progress = (function () {
    function Progress() {
        this.current = 0;
    }
    Progress.prototype.increment = function () {
        this.current++;
    };
    return Progress;
}());
//# sourceMappingURL=progress.js.map