var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CurriculumItem } from './../domain/curriculum_item';
import { ScheduleService } from './../services/schedule.service';
import { Component } from '@angular/core';
export var CurriculumCrudComponent = (function () {
    function CurriculumCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Curriculum";
        this.subtitle = "Activitie allocation for each group";
        this.selected = null;
        this.cols = [
            {
                name: "participant",
                required: true,
                autofocus: true,
                title: "Group name",
                type: "select",
                per10: 4,
                source: [],
                sourceLabel: "name",
                sourceId: "uuid",
                sourceCompare: function (a1, a2) { return a1 && a2 ? a1.uuid === a2.uuid : a1 === a2; }
            },
            {
                name: "activity",
                required: true,
                autofocus: false,
                title: "Activity name",
                type: "select",
                per10: 4,
                source: [],
                sourceLabel: "name",
                sourceId: "uuid",
                sourceCompare: function (a1, a2) { return a1 && a2 ? a1.uuid === a2.uuid : a1 === a2; }
            },
            {
                name: "weeklyCount",
                required: true,
                autofocus: false,
                title: "Weekly allocation",
                type: "number",
                per10: 2
            }
        ];
    }
    CurriculumCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.scheduleService.config.curriculum;
        this.cols.find(function (c) { return c.name === "participant"; }).source = this.scheduleService.config.participants;
        this.cols.find(function (c) { return c.name === "activity"; }).source = this.scheduleService.config.activities;
        this.scheduleService.trigger.subscribe(function () {
            _this.source = _this.scheduleService.config.curriculum;
            _this.cols.find(function (c) { return c.name === "participant"; }).source = _this.scheduleService.config.participants;
            _this.cols.find(function (c) { return c.name === "activity"; }).source = _this.scheduleService.config.activities;
        });
    };
    CurriculumCrudComponent.prototype.add = function () {
        this.selected = new CurriculumItem();
    };
    CurriculumCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    CurriculumCrudComponent.prototype.delete = function (item) {
        this.source = this.source.filter(function (p) { return p.uuid !== item.uuid; });
    };
    CurriculumCrudComponent.prototype.save = function () {
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
    CurriculumCrudComponent = __decorate([
        Component({
            selector: 'sch-activity',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], CurriculumCrudComponent);
    return CurriculumCrudComponent;
}());
//# sourceMappingURL=curriculum_crud.component.js.map