import { Participant } from './../domain/participant';
import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sch-school-config',
    templateUrl: '../../templates/school_config.component.html'
})
export class SchoolConfigComponent implements OnInit {

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() { }

}