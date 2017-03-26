var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ScheduleSlot } from './../domain/schedule_slot';
import { ScheduleService } from './../services/schedule.service';
import { Component } from '@angular/core';
export var ScheduleSlotCrudComponent = (function () {
    function ScheduleSlotCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Schedule template";
        this.subtitle = "Edit the schedule template for each group";
        this.selected = null;
        this.cols = [
            {
                name: "participant",
                required: true,
                autofocus: true,
                title: "Group name",
                type: "select",
                per10: 5,
                source: [],
                sourceLabel: "name",
                sourceId: "uuid"
            },
            {
                name: "hourSlot",
                required: true,
                autofocus: true,
                title: "Hour slot",
                type: "select",
                per10: 5,
                source: [],
                sourceLabel: "start",
                sourceId: "uuid"
            }
        ];
    }
    ScheduleSlotCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.scheduleService.config.scheduleTemplate;
        this.scheduleService.trigger.subscribe(function () { return _this.source = _this.scheduleService.config.scheduleTemplate; });
    };
    ScheduleSlotCrudComponent.prototype.add = function () {
        this.selected = new ScheduleSlot();
    };
    ScheduleSlotCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    ScheduleSlotCrudComponent.prototype.delete = function (item) {
        this.source = this.source.filter(function (p) { return p.uuid !== item.uuid; });
    };
    ScheduleSlotCrudComponent.prototype.save = function () {
        var _this = this;
        var found = this.source.find(function (p) { return p.uuid === _this.selected.uuid; });
        if (!found) {
            this.source.push(this.selected);
        }
        else {
            found = this.selected;
        }
        this.selected = null;
    };
    ScheduleSlotCrudComponent = __decorate([
        Component({
            selector: 'sch-participant-crud',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], ScheduleSlotCrudComponent);
    return ScheduleSlotCrudComponent;
}());
//# sourceMappingURL=schedule_slot_crud.component.js.map