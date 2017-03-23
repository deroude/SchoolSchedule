import { Activity } from './../domain/activity';
import { Column } from './../domain/column';
import { ScheduleService } from './../services/schedule.service';
import { StandardCrud } from './standard_crud.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-activity',
    templateUrl: '../../templates/standard_crud.component.html'
})
export class ActivityCrudComponent implements OnInit,StandardCrud<Activity> {
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService.trigger.subscribe(conf => {
            this.source = conf.activities||[];
        })
    }

    title: string = "Activities";

    subtitle: string = "Activities or subjects taught";

    selected: Activity = null;

    source: Activity[] = this.scheduleService.getConfiguration().activities||[];

    cols: Column<any>[] = [
        {
            name: "name",
            required: true,
            autofocus: true,
            title: "Activity name",
            type: "text",
            per10: 10
        }
    ];

    add(): void {
        this.selected = new Activity();
    }

    edit(p: Activity) {
        this.selected = p;
    }

    delete(item: Activity) {
        this.scheduleService.updateActivities(this.source.filter(p => p.uuid !== item.uuid));
    }

    save() {
        var found = this.source.find(p => p.uuid === this.selected.uuid);
        if (!found) {
            this.source.push(this.selected);
        } else {
            found = this.selected;
        }
        this.scheduleService.updateActivities(this.source);
        this.selected = null;
    }

    filter(s:string){
        this.source=this.scheduleService.getConfiguration().activities.filter(a=>a.name.toLowerCase().indexOf(s.toLowerCase())>-1);
    }
}