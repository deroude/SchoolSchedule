import { Configuration } from './../domain/configuration';
import { Column } from './../domain/column';
import { StandardCrud } from './standard_crud.interface';
import { Participant } from './../domain/participant';
import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-participant-crud',
    templateUrl: '../../templates/standard_crud.component.html'
})
export class ParticipantCrudComponent implements OnInit, StandardCrud<Participant> {

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService.trigger.subscribe(conf => {
            this.source = conf.participants || [];
        })
    }

    title: string = "Student groups";

    subtitle: string = "Edit the student groups of your school";

    selected: Participant = null;

    source: Participant[] = this.scheduleService.getConfiguration().participants || [];

    cols: Column<any>[] = [
        {
            name: "name",
            required: true,
            autofocus: true,
            title: "Group name",
            type: "text",
            per10: 10
        }
    ];

    add(): void {
        this.selected = new Participant();
    }

    edit(p: Participant) {
        this.selected = p;
    }

    delete(participant: Participant) {
        this.scheduleService.updateParticipants(this.source.filter(p => p.uuid !== participant.uuid));
    }

    save() {
        var found = this.source.find(p => p.uuid === this.selected.uuid);
        if (!found) {
            this.source.push(this.selected);
        } else {
            found = this.selected;
        }
        this.scheduleService.updateParticipants(this.source);
        this.selected = null;
    }

    filter(s: string) {
        this.source = this.scheduleService.getConfiguration().participants.filter(a => a.name.toLowerCase().indexOf(s.toLowerCase()) > -1);
    }

}