var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Participant } from './../domain/participant';
import { ScheduleService } from './../services/schedule.service';
import { Component } from '@angular/core';
export var ParticipantCrudComponent = (function () {
    function ParticipantCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Student groups";
        this.subtitle = "Edit the student groups of your school";
        this.selected = null;
        this.cols = [
            {
                name: "name",
                required: true,
                autofocus: true,
                title: "Group name",
                type: "text",
                per10: 10
            }
        ];
    }
    ParticipantCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.scheduleService.config.participants;
        this.scheduleService.trigger.subscribe(function () { return _this.source = _this.scheduleService.config.participants; });
    };
    ParticipantCrudComponent.prototype.add = function () {
        this.selected = new Participant();
    };
    ParticipantCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    ParticipantCrudComponent.prototype.delete = function (participant) {
        this.source = this.source.filter(function (p) { return p.uuid !== participant.uuid; });
    };
    ParticipantCrudComponent.prototype.save = function () {
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
    ParticipantCrudComponent = __decorate([
        Component({
            selector: 'sch-participant-crud',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], ParticipantCrudComponent);
    return ParticipantCrudComponent;
}());
//# sourceMappingURL=participant_crud.component.js.map