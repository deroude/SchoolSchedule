import { Configuration } from './../domain/configuration';
import { ScheduleService } from './../services/schedule.service';
import { HourSlot } from './../domain/hour_slot';
import { LipsumService } from './../services/lipsum.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sch-schedule',
  templateUrl: '../../templates/schedule.component.html'
})
export class ScheduleComponent implements OnInit {

  source: Configuration=this.scheduleService.getConfiguration();

  constructor(private scheduleService: ScheduleService) {

  }

  public ngOnInit() {
    this.scheduleService.trigger.subscribe(c => this.source = c);
  }


}