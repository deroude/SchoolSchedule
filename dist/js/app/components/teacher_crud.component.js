var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Teacher } from './../domain/teacher';
import { ScheduleService } from './../services/schedule.service';
import { Component } from '@angular/core';
export var TeacherCrudComponent = (function () {
    function TeacherCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Teachers";
        this.subtitle = "School's teaching personnel";
        this.selected = null;
        this.cols = [
            {
                name: "name",
                required: true,
                autofocus: true,
                title: "Teacher name",
                type: "text",
                per10: 4
            },
            {
                name: "assignableFor",
                required: true,
                autofocus: true,
                title: "Teaches subjects",
                type: "multiselect",
                per10: 6,
                source: [],
                sourceLabel: "name",
                sourceId: "uuid"
            }
        ];
    }
    TeacherCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.scheduleService.config.teachers;
        this.cols.find(function (c) { return c.name === "assignableFor"; }).source = this.scheduleService.config.activities;
        this.scheduleService.trigger.subscribe(function () {
            _this.source = _this.scheduleService.config.teachers;
            _this.cols.find(function (c) { return c.name === "assignableFor"; }).source = _this.scheduleService.config.activities;
        });
    };
    TeacherCrudComponent.prototype.add = function () {
        this.selected = new Teacher();
    };
    TeacherCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    TeacherCrudComponent.prototype.delete = function (participant) {
        this.source = this.source.filter(function (p) { return p.uuid !== participant.uuid; });
    };
    TeacherCrudComponent.prototype.save = function () {
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
    TeacherCrudComponent.prototype.value = function (p, col) {
        return col.sourceLabel ? p[col.name].map(function (t) { return col.source.find(function (s) { return s[col.sourceId] === t; })[col.sourceLabel]; }).join(',') : p[col.name];
    };
    TeacherCrudComponent = __decorate([
        Component({
            selector: 'sch-teacher',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], TeacherCrudComponent);
    return TeacherCrudComponent;
}());
//# sourceMappingURL=teacher_crud.component.js.map