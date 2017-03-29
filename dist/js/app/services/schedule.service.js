var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ScheduleCandidate } from './../domain/schedule_candidate';
import { ScheduleItem } from './../domain/schedule_item';
import { CompatibilityConstraint } from './../domain/constraint/compatibility_constraint';
import { CurriculumConstraint } from './../domain/constraint/curriculum_constraint';
import { ConcurrencyConstraint } from './../domain/constraint/concurrency_constraint';
import { ScheduleSlot } from './../domain/schedule_slot';
import { Util } from './../domain/util';
import { DAYS, HourSlotFactory } from './../domain/hour_slot';
import { Configuration } from './../domain/configuration';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var GENERATIONS = 10;
var GENERATION_SIZE = 20;
var INHERITANCE_PERCENT = 30;
var SURVIVORS = 5;
var PATRIARCHS = 1;
export var ScheduleService = (function () {
    function ScheduleService() {
        var _this = this;
        this.config = new Configuration();
        this.trigger = new Subject();
        var fnames = ["Andrei", "Georgiana", "Matei", "Ioana", "Gabriel", "Diana", "Florin", "Mihaela", "Damian", "Adela"];
        var lnames = ["Popescu", "Ionescu", "Georgescu", "Constantinescu", "Taranu", "Coteanu", "Dobrovolski", "Valeanu", "Iankovici"];
        var grps = "ABCDEFGH";
        this.config.activities = [
            { name: "Matematica", uuid: Util.id() },
            { name: "Romana", uuid: Util.id() },
            { name: "Fizica", uuid: Util.id() },
            { name: "Engleza", uuid: Util.id() },
            { name: "Chimie", uuid: Util.id() },
            { name: "Franceza", uuid: Util.id() },
            { name: "Biologie", uuid: Util.id() },
            { name: "Geografie", uuid: Util.id() },
            { name: "Istorie", uuid: Util.id() },
            { name: "Desen", uuid: Util.id() },
            { name: "Muzica", uuid: Util.id() },
            { name: "Sport", uuid: Util.id() },
            { name: "Lucru manual", uuid: Util.id() },
            { name: "Religie", uuid: Util.id() },
            { name: "Economie", uuid: Util.id() },
            { name: "Informatica", uuid: Util.id() },
        ];
        this.config.activities.forEach(function (a) {
            for (var i = 0; i < 3; i++)
                _this.config.teachers.push({
                    name: fnames[Math.floor(Math.random() * fnames.length)] + " " + lnames[Math.floor(Math.random() * lnames.length)],
                    uuid: Util.id(),
                    assignableFor: [a]
                });
        });
        for (var j = 0; j < DAYS.length; j++) {
            for (var i = 8; i < 13; i++) {
                var h = HourSlotFactory.make("" + i + ":00", "" + (i + 1) + ":00", DAYS[j]);
                this.config.hourSlots.push(h);
            }
        }
        for (var i = 1; i < 5; i++) {
            for (var j = 0; j < grps.length; j++) {
                var r = {
                    uuid: Util.id(),
                    name: "" + (i * 100 + j + 1),
                    restrictedTo: []
                };
                this.config.rooms.push(r);
                var px = {
                    uuid: Util.id(),
                    name: "" + i + grps.substring(j, j + 1),
                    homeRoom: r
                };
                this.config.participants.push(px);
                this.config.hourSlots.forEach(function (h) {
                    var ss = new ScheduleSlot();
                    ss.hourSlot = h;
                    ss.participant = px;
                    _this.config.scheduleTemplate.push(ss);
                });
                this.config.activities.forEach(function (a) {
                    var ts = _this.config.teachers.filter(function (t) { return typeof t.assignableFor.find(function (ax) { return ax.uuid === a.uuid; }) !== 'undefined'; });
                    _this.config.curriculum.push({
                        uuid: Util.id(),
                        participant: px,
                        activity: a,
                        weeklyCount: Math.floor(Math.random() * 2 + 1),
                        teacher: ts[Math.floor(Math.random() * ts.length)]
                    });
                });
            }
        }
        // this.generateSchedule();
        console.log(this.config);
    }
    ScheduleService.prototype.generateSchedule = function (progress) {
        var constraints = [
            new ConcurrencyConstraint(),
            new CurriculumConstraint(this.config.curriculum),
            new CompatibilityConstraint()
        ];
        this.clearSchedule();
        this._generateSchedule(constraints, progress);
        this.trigger.next();
    };
    ScheduleService.prototype.clearSchedule = function () {
        this.config.participants.forEach(function (p) { return p.status = ''; });
        this.config.teachers.forEach(function (t) { return t.status = ''; });
        this.config.schedule = [];
        this.config.noSolutionFor = [];
        this.trigger.next();
    };
    ScheduleService.prototype._generateSchedule = function (constraints, progress) {
        var _this = this;
        var oldgen = [];
        var newgen = [];
        var busy = false;
        var g = 0;
        var processor = setInterval(function () {
            console.log("Generation " + g);
            progress.increment();
            for (var n = 0; n < GENERATION_SIZE; n++) {
                var gc = new ScheduleCandidate();
                if (oldgen.length > 0) {
                    var mom = oldgen[Math.floor(Math.random() * oldgen.length)];
                }
                _this.config.curriculum.forEach(function (ci) {
                    for (var i = 0; i < ci.weeklyCount; i++) {
                        if (mom && Math.random() < INHERITANCE_PERCENT / 100) {
                            var momsGene = mom.schedule.find(function (m) { return m.activity.uuid === ci.activity.uuid
                                && m.teacher.uuid === ci.teacher.uuid && m.slot.participant.uuid === ci.participant.uuid; });
                            if (!momsGene || !_this.tryAddGene(gc, constraints, momsGene)) {
                                _this.tryAdd(gc, constraints, ci, _this.config.scheduleTemplate);
                            }
                        }
                        else {
                            _this.tryAdd(gc, constraints, ci, _this.config.scheduleTemplate);
                        }
                    }
                });
                if (gc.unschedulable.length === 0) {
                    newgen = [gc];
                    break;
                }
                else {
                    newgen.push(gc);
                }
            }
            newgen.sort(function (a, b) { return a.unschedulable.length - b.unschedulable.length; });
            console.log("Best citizen: " + newgen[0].unschedulable.length);
            if (newgen[0].unschedulable.length === 0) {
                clearInterval(processor);
                _this.setSchedule(newgen[0].schedule, newgen[0].unschedulable);
                progress.current = 0;
            }
            else if (++g === GENERATIONS) {
                clearInterval(processor);
                _this.setSchedule(newgen[0].schedule, newgen[0].unschedulable);
                progress.current = 0;
            }
            else {
                oldgen = newgen.slice(0, SURVIVORS);
                newgen = newgen.slice(0, PATRIARCHS);
            }
        }, 200);
    };
    ScheduleService.prototype.tryAddGene = function (gc, constraints, gene) {
        if (constraints.reduce(function (acc, val) { return acc = acc && val.check(gene, gc.schedule); }, true)) {
            gc.schedule.push(gene);
            return true;
        }
        return false;
    };
    ScheduleService.prototype.tryAdd = function (gc, constraints, ci, slots) {
        // console.log("Attempting to find a spot for " + ci.activity.name + " / " + ci.participant.name);
        var ss = this.config.scheduleTemplate.filter(function (ss) { return ss.participant.uuid === ci.participant.uuid; });
        var shuffle = this.shuffleSeed(ss.length);
        var found = false;
        for (var j = 0; j < ss.length; j++) {
            var candidate = new ScheduleItem();
            candidate.activity = ci.activity;
            candidate.room = ci.participant.homeRoom;
            candidate.slot = ss[shuffle[j]];
            candidate.teacher = ci.teacher;
            // console.log("Trying " + candidate.slot.hourSlot.day + " " + candidate.slot.hourSlot.name);
            if (constraints.reduce(function (acc, val) { return acc = acc && val.check(candidate, gc.schedule); }, true)) {
                gc.schedule.push(candidate);
                found = true;
                break;
            }
        }
        if (!found) {
            gc.unschedulable.push(ci);
            return false;
        }
        return true;
    };
    ScheduleService.prototype.shuffleSeed = function (length) {
        var re = [];
        for (var i = 0; i < length; i++)
            re.push(i);
        for (var i = length - 1; i > 0; i--) {
            var ix = Math.floor(Math.random() * length);
            var t = re[ix];
            re[ix] = re[i];
            re[i] = t;
        }
        return re;
    };
    ScheduleService.prototype.setSchedule = function (sch, nosch) {
        var _this = this;
        this.clearSchedule();
        this.config.schedule = sch;
        this.config.noSolutionFor = nosch;
        nosch.forEach(function (n) {
            _this.config.participants.filter(function (p) { return p.uuid === n.participant.uuid; }).forEach(function (p) { return p.status = 'ERROR'; });
            _this.config.teachers.filter(function (p) { return p.uuid === n.teacher.uuid; }).forEach(function (p) { return p.status = 'ERROR'; });
        });
    };
    ScheduleService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ScheduleService);
    return ScheduleService;
}());
//# sourceMappingURL=schedule.service.js.map