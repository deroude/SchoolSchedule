var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Activity } from './../domain/activity';
import { ScheduleService } from './../services/schedule.service';
import { Component } from '@angular/core';
export var ActivityCrudComponent = (function () {
    function ActivityCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Activities";
        this.subtitle = "Activities or subjects taught";
        this.selected = null;
        this.cols = [
            {
                name: "name",
                required: true,
                autofocus: true,
                title: "Activity name",
                type: "text",
                per10: 10
            }
        ];
    }
    ActivityCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.scheduleService.config.activities;
        this.scheduleService.trigger.subscribe(function () { return _this.source = _this.scheduleService.config.activities; });
    };
    ActivityCrudComponent.prototype.add = function () {
        this.selected = new Activity();
    };
    ActivityCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    ActivityCrudComponent.prototype.delete = function (item) {
        this.source = this.source.filter(function (p) { return p.uuid !== item.uuid; });
    };
    ActivityCrudComponent.prototype.save = function () {
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
    ActivityCrudComponent = __decorate([
        Component({
            selector: 'sch-activity',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], ActivityCrudComponent);
    return ActivityCrudComponent;
}());
//# sourceMappingURL=activity_crud.component.js.map