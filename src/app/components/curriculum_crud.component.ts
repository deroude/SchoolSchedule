import { Participant } from './../domain/participant';
import { CurriculumItem } from './../domain/curriculum_item';
import { Activity } from './../domain/activity';
import { Column } from './../domain/column';
import { ScheduleService } from './../services/schedule.service';
import { StandardCrud } from './standard_crud.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-activity',
    templateUrl: 'standard_crud.component.html'
})
export class CurriculumCrudComponent implements OnInit, StandardCrud<CurriculumItem> {
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.source = this.scheduleService.config.curriculum;
        this.cols.find(c => c.name === "participant").source = this.scheduleService.config.participants;
        this.cols.find(c => c.name === "activity").source = this.scheduleService.config.activities;
        this.scheduleService.trigger.subscribe(() => {
            this.source = this.scheduleService.config.curriculum;
            this.cols.find(c => c.name === "participant").source = this.scheduleService.config.participants;
            this.cols.find(c => c.name === "activity").source = this.scheduleService.config.activities;
        });
    }

    search: string;

    title: string = "Curriculum";

    subtitle: string = "Activitie allocation for each group";

    selected: CurriculumItem = null;

    source: CurriculumItem[];

    cols: Column<any>[] = [
        {
            name: "participant",
            required: true,
            autofocus: true,
            title: "Group name",
            type: "select",
            per10: 4,
            source: [],
            sourceLabel: "name",
            sourceId: "uuid",
            sourceCompare: (a1: Participant, a2: Participant) => a1 && a2 ? a1.uuid === a2.uuid : a1 === a2
        },
        {
            name: "activity",
            required: true,
            autofocus: false,
            title: "Activity name",
            type: "select",
            per10: 4,
            source: [],
            sourceLabel: "name",
            sourceId: "uuid",
            sourceCompare: (a1: Activity, a2: Activity) => a1 && a2 ? a1.uuid === a2.uuid : a1 === a2
        },
        {
            name: "weeklyCount",
            required: true,
            autofocus: false,
            title: "Weekly allocation",
            type: "number",
            per10: 2
        }
    ];

    add(): void {
        this.selected = new CurriculumItem();
    }

    edit(p: CurriculumItem) {
        this.selected = p;
    }

    delete(item: CurriculumItem) {
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