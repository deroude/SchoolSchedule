import { RoomCrudComponent } from './components/room_crud.component';
import { TeacherCrudComponent } from './components/teacher_crud.component';
import { ActivityCrudComponent } from './components/activity_crud.component';
import { HourSlotCrudComponent } from './components/hour_slot_crud.component';
import { ParticipantCrudComponent } from './components/participant_crud.component';
import { SchoolConfigComponent } from './components/school_config.component';
import { ScheduleComponent } from './components/schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not_found.component';

const routes: Routes = [
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
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }