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
import { HourSlot } from './../domain/hour_slot';
import { Component } from '@angular/core';
export var HourSlotCrudComponent = (function () {
    function HourSlotCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Hour slots";
        this.subtitle = "Intervals where classes are held";
        this.selected = null;
        this.source = this.scheduleService.getConfiguration().hourSlots || [];
        this.cols = [
            {
                name: "start",
                required: true,
                autofocus: true,
                title: "Start at",
                type: "time",
                per10: 2
            },
            {
                name: "end",
                required: true,
                autofocus: false,
                title: "End at",
                type: "time",
                per10: 2
            },
            {
                name: "days",
                required: true,
                autofocus: false,
                title: "Days",
                type: "multiselect",
                per10: 6,
                source: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            }
        ];
    }
    HourSlotCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.trigger.subscribe(function (conf) {
            _this.source = conf.hourSlots || [];
        });
    };
    HourSlotCrudComponent.prototype.add = function () {
        this.selected = new HourSlot();
    };
    HourSlotCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    HourSlotCrudComponent.prototype.delete = function (item) {
        this.scheduleService.updateHourSlots(this.source.filter(function (p) { return p.uuid !== item.uuid; }));
    };
    HourSlotCrudComponent.prototype.save = function () {
        var _this = this;
        var found = this.source.find(function (p) { return p.uuid === _this.selected.uuid; });
        if (!found) {
            this.source.push(this.selected);
        }
        else {
            found = this.selected;
        }
        this.scheduleService.updateHourSlots(this.source);
        this.selected = null;
    };
    HourSlotCrudComponent.prototype.filter = function (s) {
    };
    HourSlotCrudComponent = __decorate([
        Component({
            selector: 'sch-hour-slot',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], HourSlotCrudComponent);
    return HourSlotCrudComponent;
}());
//# sourceMappingURL=hour_slot_crud.component.js.map