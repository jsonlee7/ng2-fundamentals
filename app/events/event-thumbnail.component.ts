import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
    `]
})
export class EventThumbnailComponent implements OnInit {
    @Input()
    singleEvent: IEvent;
    
    @Output() eventClick = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }
}