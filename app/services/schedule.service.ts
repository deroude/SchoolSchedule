import { Room } from './../domain/room';
import { Teacher } from './../domain/teacher';
import { Activity } from './../domain/activity';
import { HourSlot } from './../domain/hour_slot';
import { Participant } from './../domain/participant';
import { Configuration } from './../domain/configuration';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScheduleService {

    private config: Configuration = new Configuration();

    trigger: Subject<Configuration> = new Subject<Configuration>();

    constructor() { }

    public generateSchedule(): void {

    }

    public getConfiguration(): Configuration {
        return this.config;
    }

    public setConfiguration(nconfig: Configuration) {
        this.config = nconfig;
        this.trigger.next(this.config);
    }

    public updateParticipants(p: Participant[]) {
        this.config.participants = p;
        this.trigger.next(this.config);
    }

    public updateHourSlots(p: HourSlot[]) {
        this.config.hourSlots = p;
        this.trigger.next(this.config);
    }

    public updateActivities(p: Activity[]) {
        this.config.activities = p;
        this.trigger.next(this.config);
    }

    public updateTeachers(p: Teacher[]) {
        this.config.teachers = p;
        this.trigger.next(this.config);
    }

    public updateRooms(p: Room[]) {
        this.config.rooms = p;
        this.trigger.next(this.config);
    }
}