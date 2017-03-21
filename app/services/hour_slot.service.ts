import { HourSlot } from './../domain/hour_slot';
import { Injectable } from '@angular/core';

@Injectable()
export class HourSlotService {

    constructor() { }

    public getHourSlots():HourSlot[]{
        return [
            {start:8,end:9},
            {start:9,end:10},
            {start:10,end:11},
            {start:11,end:12},
            {start:12,end:13},
            {start:13,end:14},
            {start:14,end:15},
            {start:15,end:16},
            {start:16,end:17},
            {start:17,end:18},
        ];
    }
}