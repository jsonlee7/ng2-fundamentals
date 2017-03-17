import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    moduleId: module.id,
    templateUrl: 'create-event.component.html',
    styles: [`
    em { float: right; color:#E05C65; padding-left:10px; }
    .error input {background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder {color: #E999; }
    .error ::-moz-placeholder {color: #E999; }
    .error :-moz-placeholder {color: #E999; }
    .error ::-ms-input-placeholder {color: #E999; }
    `]
})
export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    constructor(
        private router: Router,
        private eventService: EventService) { }

    ngOnInit() { }
    
    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
    cancel(){
        this.router.navigate(['/events']);
    }
}