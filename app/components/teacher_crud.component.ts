import { Activity } from './../domain/activity';
import { Teacher } from './../domain/teacher';
import { Configuration } from './../domain/configuration';
import { Column } from './../domain/column';
import { StandardCrud } from './standard_crud.interface';
import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-teacher',
    templateUrl: '../../templates/standard_crud.component.html'
})
export class TeacherCrudComponent implements OnInit, StandardCrud<Teacher> {

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService.trigger.subscribe(conf => {
            this.source = conf.teachers || [];
            this.cols.find(c => c.name === "assignableFor").source = conf.activities;
        })
    }

    title: string = "Teachers";

    subtitle: string = "School's teaching personnel";

    selected: Teacher = null;

    source: Teacher[] = this.scheduleService.getConfiguration().teachers || [];

    cols: Column<any>[] = [
        {
            name: "name",
            required: true,
            autofocus: true,
            title: "Teacher name",
            type: "text",
            per10: 4
        },
        {
            name: "assignableFor",
            required: true,
            autofocus: true,
            title: "Teaches subjects",
            type: "multiselect",
            per10: 6,
            source: this.scheduleService.getConfiguration().activities || [],
            sourceLabel: "name",
            sourceId: "uuid"
        }
    ];

    add(): void {
        this.selected = new Teacher();
    }

    edit(p: Teacher) {
        this.selected = p;
    }

    delete(participant: Teacher) {
        this.scheduleService.updateTeachers(this.source.filter(p => p.uuid !== participant.uuid));
    }

    save() {
        var found = this.source.find(p => p.uuid === this.selected.uuid);
        if (!found) {
            this.source.push(this.selected);
        } else {
            found = this.selected;
        }
        this.scheduleService.updateTeachers(this.source);
        this.selected = null;
    }

    value(p: Teacher, col: Column<any>): string {
        return col.sourceLabel ? p[col.name].map(t => col.source.find(s => s[col.sourceId] === t)[col.sourceLabel]).join(',') : p[col.name];
    }

    filter(s: string) {
        this.source = this.scheduleService.getConfiguration().teachers.filter(a => a.name.toLowerCase().indexOf(s.toLowerCase()) > -1);
    }
}