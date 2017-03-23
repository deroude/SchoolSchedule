var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RoomCrudComponent } from './components/room_crud.component';
import { TeacherCrudComponent } from './components/teacher_crud.component';
import { ActivityCrudComponent } from './components/activity_crud.component';
import { HourSlotCrudComponent } from './components/hour_slot_crud.component';
import { ParticipantCrudComponent } from './components/participant_crud.component';
import { SchoolConfigComponent } from './components/school_config.component';
import { ScheduleComponent } from './components/schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not_found.component';
var routes = [
    { path: '', redirectTo: '/school', pathMatch: 'full' },
    { path: 'schedule', component: ScheduleComponent },
    {
        path: 'school', component: SchoolConfigComponent,
        children: [
            { path: "participant", component: ParticipantCrudComponent },
            { path: "hourSlot", component: HourSlotCrudComponent },
            { path: "activity", component: ActivityCrudComponent },
            { path: "teacher", component: TeacherCrudComponent },
            { path: "room", component: RoomCrudComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map