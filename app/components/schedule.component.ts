import { Progress } from './../domain/progress';
import { CurriculumItem } from './../domain/curriculum_item';
import { ScheduleItem } from './../domain/schedule_item';
import { Participant } from './../domain/participant';
import { Teacher } from './../domain/teacher';
import { Configuration } from './../domain/configuration';
import { ScheduleService } from './../services/schedule.service';
import { HourSlot, DAYS } from './../domain/hour_slot';
import { LipsumService } from './../services/lipsum.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sch-schedule',
  templateUrl: '../../templates/schedule.component.html'
})
export class ScheduleComponent implements OnInit {

  source: Configuration;

  selectedTeacher: Teacher;
  selectedParticipant: Participant;

  displaySchedule: ScheduleItem[][] = [];

  progress: Progress = new Progress();

  constructor(private scheduleService: ScheduleService) {

  }

  public ngOnInit() {
    this.source = this.scheduleService.config;
    this.scheduleService.trigger.subscribe(() => this.source = this.scheduleService.config);
  }

  public generateSchedule() {
    this.scheduleService.generateSchedule(this.progress);
    this._display();
  }

  public clearSchedule() {
    this.scheduleService.clearSchedule();
    this.displaySchedule = [];
  }


  public hourSlots(): HourSlot[] {
    var re: HourSlot[] = [];
    this.source.hourSlots.forEach(h => {
      if (!re.find(hx => hx.name === h.name)) {
        re.push(h);
      }
    });
    return re;
  }

  display(id: string, pt: string): void {
    switch (pt) {
      case "participant":
        this.selectedParticipant = this.source.participants.find(p => p.uuid === id);
        this.selectedTeacher = null;
        break;
      case "teacher":
        this.selectedTeacher = this.source.teachers.find(t => t.uuid === id);
        this.selectedParticipant = null;
        break;
    }
    this._display();
  }

  private _display() {
    if (!this.selectedParticipant && !this.selectedTeacher) return;
    this.displaySchedule = [];
    this.hourSlots().forEach(hst => {
      var row: ScheduleItem[] = [];
      DAYS.forEach(d => {
        var it: ScheduleItem = this.source.schedule.find(s => (!this.selectedTeacher || s.teacher.uuid === this.selectedTeacher.uuid)
          && (!this.selectedParticipant || s.slot.participant.uuid === this.selectedParticipant.uuid)
          && s.slot.hourSlot.day === d && s.slot.hourSlot.name === hst.name);
        if (it)
          row.push(it);
        // row.push(it.activity.name + " / " + (this.selectedParticipant ? it.teacher.name : it.slot.participant.name) + "[" + it.room.name + "]");
      });
      this.displaySchedule.push(row);
    });
  }

  getProblemsForParticipant(p: Participant): CurriculumItem[] {
    return this.source.noSolutionFor.filter(c => c.participant.uuid === p.uuid);
  }
  getProblemsForTeacher(p: Teacher): CurriculumItem[] {
    return this.source.noSolutionFor.filter(c => c.teacher.uuid === p.uuid);
  }

  lock(s:ScheduleItem):void{
    s.locked=!s.locked;
  }

}