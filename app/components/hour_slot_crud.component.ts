import { Column } from './../domain/column';
import { ScheduleService } from './../services/schedule.service';
import { HourSlot, HourSlotFactory } from './../domain/hour_slot';
import { StandardCrud } from './standard_crud.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-hour-slot',
    templateUrl: '../../templates/standard_crud.component.html'
})
export class HourSlotCrudComponent implements OnInit, StandardCrud<HourSlot> {
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.source = this.scheduleService.config.hourSlots;
        this.scheduleService.trigger.subscribe(() => this.source = this.scheduleService.config.hourSlots);
    }

    title: string = "Hour slots";

    search: string;

    subtitle: string = "Intervals where classes are held";

    selected: HourSlot = null;

    source: HourSlot[];

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
            name: "day",
            required: true,
            autofocus: false,
            title: "Day",
            type: "select",
            per10: 6,
            source: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
    ];

    add(): void {
        this.selected = HourSlotFactory.make("8:00", "9:00", "Monday");
    }

    edit(p: HourSlot) {
        this.selected = p;
    }

    delete(item: HourSlot) {
        this.source = this.source.filter(p => p.uuid !== item.uuid);
    }

    save() {
        var found = this.source.find(p => p.uuid === this.selected.uuid);
        if (!found) {
            this.source.push(this.selected);
        } else {
            found = this.selected;
        }
        this.selected = null;
    }

}