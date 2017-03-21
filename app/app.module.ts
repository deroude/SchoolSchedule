import { ActivityService } from './services/activity.service';
import { HourSlotService } from './services/hour_slot.service';
import { EditorDirective } from './directives/editor.directive';
import { LipsumService } from './services/lipsum.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { NotFoundComponent } from './components/not_found.component';
import { LandingComponent } from './components/landing.component';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent,
    LandingComponent,
    NotFoundComponent,
    EditorDirective
  ],
  providers: [
    LipsumService,
    ActivityService,
    HourSlotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
