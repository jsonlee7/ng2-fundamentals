import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/index';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'nav-bar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none;}}
    li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent implements OnInit {
    constructor(private auth: AuthService) { }

    ngOnInit() {
        
     }
}