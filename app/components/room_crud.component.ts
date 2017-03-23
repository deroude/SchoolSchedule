import { Room } from './../domain/room';
import { Activity } from './../domain/activity';
import { Teacher } from './../domain/teacher';
import { Configuration } from './../domain/configuration';
import { Column } from './../domain/column';
import { StandardCrud } from './standard_crud.interface';
import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-room',
    templateUrl: '../../templates/standard_crud.component.html'
})
export class RoomCrudComponent implements OnInit, StandardCrud<Room> {

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService.trigger.subscribe(conf => {
            this.source = conf.rooms || [];
            this.cols.find(c => c.name === "restrictedTo").source = conf.activities;
        })
    }

    title: string = "Rooms";

    subtitle: string = "Rooms available";

    selected: Room = null;

    source: Room[] = this.scheduleService.getConfiguration().rooms || [];

    cols: Column<any>[] = [
        {
            name: "name",
            required: true,
            autofocus: true,
            title: "Room identifier",
            type: "text",
            per10: 4
        },
        {
            name: "restrictedTo",
            required: false,
            autofocus: false,
            title: "Restricted for",
            type: "multiselect",
            per10: 6,
            source: this.scheduleService.getConfiguration().activities || [],
            sourceLabel: "name",
            sourceId: "uuid"
        }
    ];

    add(): void {
        this.selected = new Room();
    }

    edit(p: Room) {
        this.selected = p;
    }

    delete(x: Room) {
        this.scheduleService.updateRooms(this.source.filter(p => p.uuid !== x.uuid));
    }

    save() {
        var found = this.source.find(p => p.uuid === this.selected.uuid);
        if (!found) {
            this.source.push(this.selected);
        } else {
            found = this.selected;
        }
        this.scheduleService.updateRooms(this.source);
        this.selected = null;
    }

    value(p: Room, col: Column<any>): string {
        return col.sourceLabel ? p[col.name] ? p[col.name].map(t => col.source.find(s => s[col.sourceId] === t)[col.sourceLabel]).join(',') : '' : p[col.name];
    }

    filter(s: string) {
        this.source = this.scheduleService.getConfiguration().rooms.filter(a => a.name.toLowerCase().indexOf(s.toLowerCase()) > -1);
    }
}