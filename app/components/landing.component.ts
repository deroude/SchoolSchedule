import { ActivityService } from './../services/activity.service';
import { HourSlotService } from './../services/hour_slot.service';
import { HourSlot } from './../domain/hour_slot';
import { LipsumService } from './../services/lipsum.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ld-landing',
  templateUrl: '../../templates/landing.component.html'
})
export class LandingComponent implements OnInit {

  hourSlots: HourSlot[];

  constructor(private hourSlotService: HourSlotService,
    private activityService: ActivityService) {

  }

  public ngOnInit() {
    this.hourSlots = this.hourSlotService.getHourSlots();
  }


}