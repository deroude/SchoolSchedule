var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not_found.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map