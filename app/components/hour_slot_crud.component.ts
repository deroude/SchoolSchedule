import { Column } from './../domain/column';
import { ScheduleService } from './../services/schedule.service';
import { HourSlot } from './../domain/hour_slot';
import { StandardCrud } from './standard_crud.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-hour-slot',
    templateUrl: '../../templates/standard_crud.component.html'
})
export class HourSlotCrudComponent implements OnInit, StandardCrud<HourSlot> {
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService.trigger.subscribe(conf => {
            this.source = conf.hourSlots || [];
        })
    }

    title: string = "Hour slots";

    subtitle: string = "Intervals where classes are held";

    selected: HourSlot = null;

    source: HourSlot[] = this.scheduleService.getConfiguration().hourSlots || [];

    cols: Column<any>[] = [
        {
            name: "start",
            required: true,
            autofocus: true,
            title: "Start at",
            type: "time",
            per10: 2
        },
        {
            name: "end",
            required: true,
            autofocus: false,
            title: "End at",
            type: "time",
            per10: 2
        },
        {
            name: "days",
            required: true,
            autofocus: false,
            title: "Days",
            type: "multiselect",
            per10: 6,
            source: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
    ];

    add(): void {
        this.selected = new HourSlot();
    }

    edit(p: HourSlot) {
        this.selected = p;
    }

    delete(item: HourSlot) {
        this.scheduleService.updateHourSlots(this.source.filter(p => p.uuid !== item.uuid));
    }

    save() {
        var found = this.source.find(p => p.uuid === this.selected.uuid);
        if (!found) {
            this.source.push(this.selected);
        } else {
            found = this.selected;
        }
        this.scheduleService.updateHourSlots(this.source);
        this.selected = null;
    }

    filter(s: string) {
    }

}