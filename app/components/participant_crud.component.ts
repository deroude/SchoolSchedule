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
        this.source=this.scheduleService.config.participants;
        this.scheduleService.trigger.subscribe(() => this.source = this.scheduleService.config.participants);
    }

    search:string;
    
    title: string = "Student groups";

    subtitle: string = "Edit the student groups of your school";

    selected: Participant = null;

    source: Participant[] ;

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
        this.source=this.source.filter(p => p.uuid !== participant.uuid);
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