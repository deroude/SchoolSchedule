import { ScheduleSlotCrudComponent } from './components/schedule_slot_crud.component';
import { CurriculumCrudComponent } from './components/curriculum_crud.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ToStringPipe } from './pipes/tostring.pipe';
import { RoomCrudComponent } from './components/room_crud.component';
import { TeacherCrudComponent } from './components/teacher_crud.component';
import { ActivityCrudComponent } from './components/activity_crud.component';
import { HourSlotCrudComponent } from './components/hour_slot_crud.component';
import { ParticipantCrudComponent } from './components/participant_crud.component';
import { SchoolConfigComponent } from './components/school_config.component';
import { ScheduleComponent } from './components/schedule.component';
import { ScheduleService } from './services/schedule.service';
import { EditorDirective } from './directives/editor.directive';
import { LipsumService } from './services/lipsum.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { NotFoundComponent } from './components/not_found.component';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent,
    ScheduleComponent,
    SchoolConfigComponent,
    ParticipantCrudComponent,
    HourSlotCrudComponent,
    ActivityCrudComponent,
    TeacherCrudComponent,
    RoomCrudComponent,
    CurriculumCrudComponent,
    ScheduleSlotCrudComponent,
    ToStringPipe,
    FilterPipe,
    NotFoundComponent,
    EditorDirective
  ],
  providers: [
    LipsumService,
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
