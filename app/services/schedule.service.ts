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

    config:Configuration=new Configuration();
    trigger:Subject<void>=new Subject<void>();

    constructor() { }

    public generateSchedule(): void {

    }

    
}