import { Component, OnInit } from '@angular/core';
import { EventService, IEvent, ISession } from '../shared/index';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px;}
        a {cursor:pointer;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    constructor(
        private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(x => x.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
        //this.eventService.saveSession(this.event.id,session);
    }
    cancelAddSession() {
        this.addMode = false;
    }
}