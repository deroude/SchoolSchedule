var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ScheduleService } from './../services/schedule.service';
import { DAYS } from './../domain/hour_slot';
import { Component } from '@angular/core';
export var ScheduleComponent = (function () {
    function ScheduleComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.displaySchedule = [];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.scheduleService.config;
        this.scheduleService.trigger.subscribe(function () { return _this.source = _this.scheduleService.config; });
    };
    ScheduleComponent.prototype.generateSchedule = function () {
        this.scheduleService.generateSchedule();
        this._display();
    };
    ScheduleComponent.prototype.clearSchedule = function () {
        this.scheduleService.clearSchedule();
        this.displaySchedule = [];
    };
    ScheduleComponent.prototype.hourSlots = function () {
        var re = [];
        this.source.hourSlots.forEach(function (h) {
            if (!re.find(function (hx) { return hx.name === h.name; })) {
                re.push(h);
            }
        });
        return re;
    };
    ScheduleComponent.prototype.display = function (id, pt) {
        switch (pt) {
            case "participant":
                this.selectedParticipant = this.source.participants.find(function (p) { return p.uuid === id; });
                this.selectedTeacher = null;
                break;
            case "teacher":
                this.selectedTeacher = this.source.teachers.find(function (t) { return t.uuid === id; });
                this.selectedParticipant = null;
                break;
        }
        this._display();
    };
    ScheduleComponent.prototype._display = function () {
        var _this = this;
        if (!this.selectedParticipant && !this.selectedTeacher)
            return;
        this.displaySchedule = [];
        this.hourSlots().forEach(function (hst) {
            var row = [hst.name];
            DAYS.forEach(function (d) {
                var it = _this.source.schedule.find(function (s) { return (!_this.selectedTeacher || s.teacher.uuid === _this.selectedTeacher.uuid)
                    && (!_this.selectedParticipant || s.slot.participant.uuid === _this.selectedParticipant.uuid)
                    && s.slot.hourSlot.day === d && s.slot.hourSlot.name === hst.name; });
                if (it)
                    row.push(it.activity.name + " / " + (_this.selectedParticipant ? it.teacher.name : it.slot.participant.name) + "[" + it.room.name + "]");
            });
            _this.displaySchedule.push(row);
        });
    };
    ScheduleComponent = __decorate([
        Component({
            selector: 'sch-schedule',
            templateUrl: '../../templates/schedule.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
//# sourceMappingURL=schedule.component.js.map