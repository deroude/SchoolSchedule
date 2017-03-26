var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ScheduleItem } from './../domain/schedule_item';
import { CompatibilityConstraint } from './../domain/constraint/compatibility_constraint';
import { CurriculumConstraint } from './../domain/constraint/curriculum_constraint';
import { ConcurrencyConstraint } from './../domain/constraint/concurrency_constraint';
import { Configuration } from './../domain/configuration';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export var ScheduleService = (function () {
    function ScheduleService() {
        // var fnames: string[] = ["Andrei", "Georgiana", "Matei", "Ioana", "Gabriel", "Diana", "Florin", "Mihaela", "Damian", "Adela"];
        // var lnames: string[] = ["Popescu", "Ionescu", "Georgescu", "Constantinescu", "Taranu", "Coteanu", "Dobrovolski", "Valeanu", "Iankovici"];
        // var grps: string = "ABCDEFGH";
        this.config = new Configuration();
        this.trigger = new Subject();
        // this.config.activities = [
        //     { name: "Matematica", uuid: Util.id() },
        //     { name: "Romana", uuid: Util.id() },
        //     { name: "Fizica", uuid: Util.id() },
        //     { name: "Engleza", uuid: Util.id() },
        //     { name: "Chimie", uuid: Util.id() },
        //     { name: "Franceza", uuid: Util.id() },
        //     { name: "Biologie", uuid: Util.id() },
        //     { name: "Geografie", uuid: Util.id() },
        //     { name: "Istorie", uuid: Util.id() },
        //     { name: "Desen", uuid: Util.id() },
        //     { name: "Muzica", uuid: Util.id() },
        //     { name: "Sport", uuid: Util.id() },
        //     { name: "Lucru manual", uuid: Util.id() },
        //     { name: "Religie", uuid: Util.id() },
        //     { name: "Economie", uuid: Util.id() },
        //     { name: "Informatica", uuid: Util.id() },
        // ];
        // this.config.activities.forEach(a => this.config.teachers.push({
        //     name: fnames[Math.floor(Math.random() * fnames.length)] + " " + lnames[Math.floor(Math.random() * lnames.length)],
        //     uuid: Util.id(),
        //     assignableFor: [a]
        // }));
        // for (var j: number = 0; j < DAYS.length; j++) {
        //     for (var i: number = 8; i < 13; i++) {
        //         var h: HourSlot = HourSlotFactory.make("" + i + ":00", "" + (i + 1) + ":00", DAYS[j]);
        //         this.config.hourSlots.push(h);
        //     }
        // }
        // for (var i: number = 1; i < 5; i++) {
        //     for (var j: number = 0; j < grps.length; j++) {
        //         var r: Room = {
        //             uuid: Util.id(),
        //             name: "" + (i * 100 + j + 1),
        //             restrictedTo: []
        //         };
        //         this.config.rooms.push(r);
        //         var px: Participant = {
        //             uuid: Util.id(),
        //             name: "" + i + grps.substring(j, j + 1),
        //             homeRoom: r
        //         };
        //         this.config.participants.push(px);
        //         this.config.hourSlots.forEach(h => {
        //             var ss: ScheduleSlot = new ScheduleSlot();
        //             ss.hourSlot = h;
        //             ss.participant = px;
        //             this.config.scheduleTemplate.push(ss);
        //         });
        //         this.config.activities.forEach(a =>
        //             this.config.curriculum.push({
        //                 uuid: Util.id(),
        //                 participant: px,
        //                 activity: a,
        //                 weeklyCount: Math.floor(Math.random() * 2 + 1),
        //                 teacher: this.config.teachers.find(t => typeof t.assignableFor.find(ax => ax.uuid === a.uuid) !== 'undefined')
        //             }));
        //     }
        // }
        // var constraints: Constraint[] = [
        //     new ConcurrencyConstraint(this.config),
        //     new CurriculumConstraint(this.config),
        //     new CompatibilityConstraint(this.config)
        // ]
        // this.generateSchedule(constraints);
        // console.log(this.config);
    }
    ScheduleService.prototype.generateSchedule = function () {
        var constraints = [
            new ConcurrencyConstraint(this.config),
            new CurriculumConstraint(this.config),
            new CompatibilityConstraint(this.config)
        ];
        this.config.schedule = [];
        this._generateSchedule(constraints);
        this.trigger.next();
    };
    ScheduleService.prototype.clearSchedule = function () {
        this.config.schedule = [];
        this.trigger.next();
    };
    ScheduleService.prototype._generateSchedule = function (constraints) {
        var _this = this;
        this.config.curriculum.forEach(function (ci) {
            for (var i = 0; i < ci.weeklyCount; i++) {
                // console.log("Attempting to find a spot for " + ci.activity.name + " / " + ci.participant.name);
                var ss = _this.config.scheduleTemplate.filter(function (ss) { return ss.participant.uuid === ci.participant.uuid; });
                for (var j = 0; j < ss.length; j++) {
                    var candidate = new ScheduleItem();
                    candidate.activity = ci.activity;
                    candidate.room = ci.participant.homeRoom;
                    candidate.slot = ss[j];
                    candidate.teacher = ci.teacher;
                    // console.log("Trying " + candidate.slot.hourSlot.day + " " + candidate.slot.hourSlot.name);
                    if (constraints.reduce(function (acc, val) { return acc = acc && val.check(candidate); }, true)) {
                        _this.config.schedule.push(candidate);
                        // console.log("found");
                        break;
                    }
                }
            }
        });
    };
    ScheduleService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ScheduleService);
    return ScheduleService;
}());
//# sourceMappingURL=schedule.service.js.map