import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, IEvent } from './shared/index';
import { ToastrService } from '.././common/toastr.service';



@Component({
    moduleId: module.id,
    templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events:IEvent[];
    
    constructor(
        private eventService: EventService,
        private toastrService: ToastrService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
    
    handleThumbnailClick(eventName){
        this.toastrService.success(eventName,`${eventName} clicked`);
    }

}