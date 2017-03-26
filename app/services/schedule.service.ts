import { ScheduleItem } from './../domain/schedule_item';
import { CompatibilityConstraint } from './../domain/constraint/compatibility_constraint';
import { CurriculumConstraint } from './../domain/constraint/curriculum_constraint';
import { ConcurrencyConstraint } from './../domain/constraint/concurrency_constraint';
import { Constraint } from './../domain/constraint';
import { ScheduleSlot } from './../domain/schedule_slot';
import { Util } from './../domain/util';
import { Room } from './../domain/room';
import { Teacher } from './../domain/teacher';
import { Activity } from './../domain/activity';
import { HourSlot, DAYS, HourSlotFactory } from './../domain/hour_slot';
import { Participant } from './../domain/participant';
import { Configuration } from './../domain/configuration';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScheduleService {

    config: Configuration = new Configuration();
    trigger: Subject<void> = new Subject<void>();

    constructor() {
        // var fnames: string[] = ["Andrei", "Georgiana", "Matei", "Ioana", "Gabriel", "Diana", "Florin", "Mihaela", "Damian", "Adela"];
        // var lnames: string[] = ["Popescu", "Ionescu", "Georgescu", "Constantinescu", "Taranu", "Coteanu", "Dobrovolski", "Valeanu", "Iankovici"];
        // var grps: string = "ABCDEFGH";

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

    public generateSchedule(): void {
        var constraints: Constraint[] = [
            new ConcurrencyConstraint(this.config),
            new CurriculumConstraint(this.config),
            new CompatibilityConstraint(this.config)
        ];
        this.config.schedule = [];
        this._generateSchedule(constraints);
        this.trigger.next();
    }

    public clearSchedule(): void {
        this.config.schedule = [];
        this.trigger.next();
    }

    private _generateSchedule(constraints: Constraint[]): void {
        this.config.curriculum.forEach(ci => {
            for (var i: number = 0; i < ci.weeklyCount; i++) {
                // console.log("Attempting to find a spot for " + ci.activity.name + " / " + ci.participant.name);
                var ss: ScheduleSlot[] = this.config.scheduleTemplate.filter(ss => ss.participant.uuid === ci.participant.uuid)
                for (var j: number = 0; j < ss.length; j++) {
                    var candidate: ScheduleItem = new ScheduleItem();
                    candidate.activity = ci.activity;
                    candidate.room = ci.participant.homeRoom;
                    candidate.slot = ss[j];
                    candidate.teacher = ci.teacher;
                    // console.log("Trying " + candidate.slot.hourSlot.day + " " + candidate.slot.hourSlot.name);
                    if (constraints.reduce((acc, val) => acc = acc && val.check(candidate), true)) {
                        this.config.schedule.push(candidate);
                        // console.log("found");
                        break;
                    }
                }
            }
        });
    }
}