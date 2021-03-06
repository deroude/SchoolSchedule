import { Progress } from './../domain/progress';
import { CurriculumItem } from './../domain/curriculum_item';
import { ScheduleCandidate } from './../domain/schedule_candidate';
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

const GENERATIONS: number = 100;
const GENERATION_SIZE: number = 30;
const MUTANTION_PERCENT: number = 10;
const SURVIVORS: number = 10;
const CHAMPIONS: number = 1;

@Injectable()
export class ScheduleService {

    config: Configuration = new Configuration();
    trigger: Subject<void> = new Subject<void>();

    constructor() {
        var fnames: string[] = ["Andrei", "Georgiana", "Matei", "Ioana", "Gabriel", "Diana", "Florin", "Mihaela", "Damian", "Adela"];
        var lnames: string[] = ["Popescu", "Ionescu", "Georgescu", "Constantinescu", "Taranu", "Coteanu", "Dobrovolski", "Valeanu", "Iankovici"];
        var grps: string = "ABCDEFGH";

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

        this.config.activities.forEach(a => {
            for (var i: number = 0; i < 3; i++)
                this.config.teachers.push({
                    name: fnames[Math.floor(Math.random() * fnames.length)] + " " + lnames[Math.floor(Math.random() * lnames.length)],
                    uuid: Util.id(),
                    assignableFor: [a]
                });
        });

        for (var j: number = 0; j < DAYS.length; j++) {
            for (var i: number = 8; i < 13; i++) {
                var h: HourSlot = HourSlotFactory.make("" + i + ":00", "" + (i + 1) + ":00", DAYS[j]);
                this.config.hourSlots.push(h);
            }
        }

        for (var i: number = 1; i < 5; i++) {
            for (var j: number = 0; j < grps.length; j++) {
                var r: Room = {
                    uuid: Util.id(),
                    name: "" + (i * 100 + j + 1),
                    restrictedTo: []
                };
                this.config.rooms.push(r);
                var px: Participant = {
                    uuid: Util.id(),
                    name: "" + i + grps.substring(j, j + 1),
                    homeRoom: r
                };
                this.config.participants.push(px);
                this.config.hourSlots.forEach(h => {
                    var ss: ScheduleSlot = new ScheduleSlot();
                    ss.hourSlot = h;
                    ss.participant = px;
                    this.config.scheduleTemplate.push(ss);
                });
                var top: number = 0;
                this.config.activities.forEach(a => {
                    var ts: Teacher[] = this.config.teachers.filter(t => typeof t.assignableFor.find(ax => ax.uuid === a.uuid) !== 'undefined');
                    var t: Teacher = ts[Math.floor(Math.random() * ts.length)];
                    var nt: number = this.config.curriculum.filter(c => c.teacher.uuid === t.uuid).reduce((a, c) => a += c.weeklyCount, 0);
                    var n: number = Math.floor(Math.random() * 2 + 1);
                    top += n;
                    if (top < 25 && nt + n < 25) {
                        this.config.curriculum.push({
                            uuid: Util.id(),
                            participant: px,
                            activity: a,
                            weeklyCount: n,
                            teacher: t
                        });
                    }
                });
            }
        }
        // this.generateSchedule();
        // console.log(this.config);
    }

    public generateSchedule(progress: Progress): void {
        var constraints: Constraint[] = [
            new ConcurrencyConstraint(),
            new CurriculumConstraint(this.config.curriculum),
            new CompatibilityConstraint()
        ];
        // this.clearSchedule();
        if (this._validate()) {
            setTimeout(()=>this._generateSchedule(constraints, progress),10);
            this.trigger.next();
        } else {
            console.log("Impossible allocation");
        }
    }

    public clearSchedule(): void {
        this.config.participants.forEach(p => p.status = '');
        this.config.teachers.forEach(t => t.status = '');
        this.config.schedule = [];
        this.config.noSolutionFor = [];
        this.trigger.next();
    }

    private _validate(): boolean {
        for (var i: number = 0; i < this.config.teachers.length; i++) {
            var total: number = 0;
            this.config.curriculum.filter(c => c.teacher.uuid === this.config.teachers[i].uuid)
                .forEach(c => total += c.weeklyCount);
            if (total > this.config.hourSlots.length) {
                return false;
            }
        }
        for (var i: number = 0; i < this.config.participants.length; i++) {
            var total: number = 0;
            this.config.curriculum.filter(c => c.participant.uuid === this.config.participants[i].uuid)
                .forEach(c => total += c.weeklyCount);
            if (total > this.config.hourSlots.length) {
                return false;
            }
        }
        return true;
    }

    private _generateSchedule(constraints: Constraint[], progress: Progress): void {
        var oldgen: ScheduleCandidate[] = [];
        if (this.config.schedule && this.config.schedule.length > 0) {
            var base = new ScheduleCandidate();
            base.schedule = this.config.schedule;
            base.unschedulable = this.config.noSolutionFor;
            var newgen: ScheduleCandidate[] = [base];
        } else {
            var newgen: ScheduleCandidate[] = [];
        }

        var g: number = 0;
        var processor= setInterval(() => {
            console.log("Generation " + g);
            progress.increment();
            for (var n: number = 0; n < GENERATION_SIZE; n++) {
                if (oldgen.length > 0) {
                    this.shuffle(oldgen);
                    var mom = oldgen[0];
                    var dad = oldgen[1];
                }
                var gc: ScheduleCandidate = new ScheduleCandidate();

                if (mom && dad) {
                    this.shuffle(mom.schedule);
                    this.shuffle(dad.schedule);
                    var takeFromMom: boolean = true;
                    var momIndex: number = mom.schedule.length - 1;
                    var dadIndex: number = dad.schedule.length - 1;
                    while (momIndex > 0 || dadIndex > 0) {
                        if (takeFromMom) {
                            if (momIndex > 0) {
                                this.tryAddGene(gc, constraints, mom.schedule[momIndex--]);
                            }
                            takeFromMom = false;
                        } else {
                            if (dadIndex > 0) {
                                this.tryAddGene(gc, constraints, dad.schedule[dadIndex--]);
                            }
                            takeFromMom = true;
                        }
                    }
                    // console.log("genetic saturation: " + gc.schedule.length+" / "+this.config.scheduleTemplate.length);
                }
                if(gc.schedule.length>this.config.scheduleTemplate.length*(100-MUTANTION_PERCENT)/100){
                    this.shuffle(gc.schedule);
                    gc.schedule=gc.schedule.splice(0,this.config.scheduleTemplate.length*(100-MUTANTION_PERCENT)/100);
                }
                this.config.curriculum.forEach(ci => {
                    var existing: ScheduleItem[] = gc.schedule.filter(sx => sx.activity.uuid === ci.activity.uuid && sx.slot.participant.uuid === ci.participant.uuid);
                    if (existing.length < ci.weeklyCount) {
                        for (var ix: number = existing.length; ix < ci.weeklyCount; ix++) {
                            this.tryAdd(gc, constraints, ci, this.config.scheduleTemplate);
                        }
                    }
                });
                if (gc.getScore() === 0) {
                    newgen = [gc];
                    break;
                } else {
                    newgen.push(gc);
                }
            }
            newgen.sort((a, b) => a.getScore() - b.getScore());
            if (newgen[0].getScore() === 0) {
                clearInterval(processor);
                this.setSchedule(newgen[0].schedule, newgen[0].unschedulable);
                progress.current = 0;
            } else if (++g === GENERATIONS) {
                clearInterval(processor);
                this.setSchedule(newgen[0].schedule, newgen[0].unschedulable);
                progress.current = 0;
            }
            else {
                oldgen = newgen.slice(0, SURVIVORS);
                newgen = newgen.slice(0, CHAMPIONS);
            }
            console.log("Best citizen: " + newgen[0].getScore() + "; Worst survivor: " + oldgen[SURVIVORS - 1].getScore());
        }, 200);
    }

    private tryAddGene(gc: ScheduleCandidate, constraints: Constraint[], gene: ScheduleItem): boolean {
        if (constraints.reduce((acc, val) => acc = acc && val.check(gene, gc.schedule), true)) {
            gc.schedule.push(gene);
            return true;
        }
        return false;
    }

    private tryAdd(gc: ScheduleCandidate, constraints: Constraint[], ci: CurriculumItem, slots: ScheduleSlot[]): boolean {
        // console.log("Attempting to find a spot for " + ci.activity.name + " / " + ci.participant.name);
        var ss: ScheduleSlot[] = this.config.scheduleTemplate.filter(ss => ss.participant.uuid === ci.participant.uuid)
        this.shuffle(ss);
        var found: boolean = false;
        for (var j: number = 0; j < ss.length; j++) {
            var candidate: ScheduleItem = new ScheduleItem();
            candidate.activity = ci.activity;
            candidate.room = ci.participant.homeRoom;
            candidate.slot = ss[j];
            candidate.teacher = ci.teacher;
            // console.log("Trying " + candidate.slot.hourSlot.day + " " + candidate.slot.hourSlot.name);
            if (constraints.reduce((acc, val) => acc = acc && val.check(candidate, gc.schedule), true)) {
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
    }

    private shuffle<T>(arg: T[]): void {
        var i = 0
            , j = 0
            , temp = null;

        for (i = arg.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arg[i];
            arg[i] = arg[j];
            arg[j] = temp;
        }
    }


    // private shuffleSeed(length: number): number[] {
    //     var re: number[] = [];
    //     for (var i: number = 0; i < length; i++) re.push(i);
    //     for (var i: number = length - 1; i > 0; i--) {
    //         var ix: number = Math.floor(Math.random() * i);
    //         var t: number = re[ix];
    //         re[ix] = re[i];
    //         re[i] = t;
    //     }
    //     return re;
    // }

    private setSchedule(sch: ScheduleItem[], nosch: CurriculumItem[]) {
        this.clearSchedule();
        this.config.schedule = sch;
        this.config.noSolutionFor = nosch;
        nosch.forEach(n => {
            this.config.participants.filter(p => p.uuid === n.participant.uuid).forEach(p => p.status = 'ERROR');
            this.config.teachers.filter(p => p.uuid === n.teacher.uuid).forEach(p => p.status = 'ERROR');
        });
    }
}