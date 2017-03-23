var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Room } from './../domain/room';
import { ScheduleService } from './../services/schedule.service';
import { Component } from '@angular/core';
export var RoomCrudComponent = (function () {
    function RoomCrudComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = "Rooms";
        this.subtitle = "Rooms available";
        this.selected = null;
        this.source = this.scheduleService.getConfiguration().rooms || [];
        this.cols = [
            {
                name: "name",
                required: true,
                autofocus: true,
                title: "Room identifier",
                type: "text",
                per10: 4
            },
            {
                name: "restrictedTo",
                required: false,
                autofocus: false,
                title: "Restricted for",
                type: "multiselect",
                per10: 6,
                source: this.scheduleService.getConfiguration().activities || [],
                sourceLabel: "name",
                sourceId: "uuid"
            }
        ];
    }
    RoomCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.trigger.subscribe(function (conf) {
            _this.source = conf.rooms || [];
            _this.cols.find(function (c) { return c.name === "restrictedTo"; }).source = conf.activities;
        });
    };
    RoomCrudComponent.prototype.add = function () {
        this.selected = new Room();
    };
    RoomCrudComponent.prototype.edit = function (p) {
        this.selected = p;
    };
    RoomCrudComponent.prototype.delete = function (x) {
        this.scheduleService.updateRooms(this.source.filter(function (p) { return p.uuid !== x.uuid; }));
    };
    RoomCrudComponent.prototype.save = function () {
        var _this = this;
        var found = this.source.find(function (p) { return p.uuid === _this.selected.uuid; });
        if (!found) {
            this.source.push(this.selected);
        }
        else {
            found = this.selected;
        }
        this.scheduleService.updateRooms(this.source);
        this.selected = null;
    };
    RoomCrudComponent.prototype.value = function (p, col) {
        return col.sourceLabel ? p[col.name] ? p[col.name].map(function (t) { return col.source.find(function (s) { return s[col.sourceId] === t; })[col.sourceLabel]; }).join(',') : '' : p[col.name];
    };
    RoomCrudComponent.prototype.filter = function (s) {
        this.source = this.scheduleService.getConfiguration().rooms.filter(function (a) { return a.name.toLowerCase().indexOf(s.toLowerCase()) > -1; });
    };
    RoomCrudComponent = __decorate([
        Component({
            selector: 'sch-room',
            templateUrl: '../../templates/standard_crud.component.html'
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], RoomCrudComponent);
    return RoomCrudComponent;
}());
//# sourceMappingURL=room_crud.component.js.map