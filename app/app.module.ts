import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EventsAppComponent } from './events-app.component';

import {
    EventsListComponent,
    EventListResolver,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventRouteActivator
} from './events/index';

import {
ToastrService,
CollapsibleWellComponent
} from './common/index';
 
import { NavBarComponent } from './nav/nav-bar.component';
import { Error404Component } from './errors/404.component';
import { EventService } from './events/shared/event.service';
import { AuthService } from './user/index';

import { appRoutes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        SessionListComponent,
        CreateEventComponent,
        CreateSessionComponent,
        Error404Component,
        NavBarComponent,
        CollapsibleWellComponent],
    providers: [
        EventService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthService,
        ToastrService],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    console.log('isDirty:',component.isDirty);
    if (component.isDirty)
        return window.confirm('Do you want to cancel?'); 
    
    return true; 
}