import { ScheduleSlot } from './../domain/schedule_slot';
import { Configuration } from './../domain/configuration';
import { Column } from './../domain/column';
import { StandardCrud } from './standard_crud.interface';
import { Participant } from './../domain/participant';
import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-participant-crud',
    templateUrl: 'standard_crud.component.html'
})
export class ScheduleSlotCrudComponent implements OnInit, StandardCrud<ScheduleSlot> {

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.source = this.scheduleService.config.scheduleTemplate;
        this.scheduleService.trigger.subscribe(() => this.source = this.scheduleService.config.scheduleTemplate);
    }

    search: string;

    title: string = "Schedule template";

    subtitle: string = "Edit the schedule template for each group";

    selected: ScheduleSlot = null;

    source: ScheduleSlot[];

    cols: Column<any>[] = [
        {
            name: "participant",
            required: true,
            autofocus: true,
            title: "Group name",
            type: "select",
            per10: 5,
            source: [],
            sourceLabel: "name",
            sourceId: "uuid"
        },
        {
            name: "hourSlot",
            required: true,
            autofocus: true,
            title: "Hour slot",
            type: "select",
            per10: 5,
            source: [],
            sourceLabel: "start",
            sourceId: "uuid"
        }
    ];

    add(): void {
        this.selected = new ScheduleSlot();
    }

    edit(p: ScheduleSlot) {
        this.selected = p;
    }

    delete(item: ScheduleSlot) {
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