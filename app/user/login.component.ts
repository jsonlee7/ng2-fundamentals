import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './index';
import { ToastrService } from '../common/toastr.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styles: [`
    em { float: right; color:#E05C65; padding-left:10px; }
    `]
})
export class LoginComponent implements OnInit {
    constructor(
        private auth: AuthService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() { }

    login(loginForm) {
        console.log(loginForm);
        if (loginForm.userName === null || loginForm.password === null) {
            this.toastr.error('Username and password are required.');
        } else {
            this.auth.loginUser(loginForm.userName, loginForm.password);
            this.router.navigate(['events']);
        }

    }
    cancel() {
        this.router.navigate(['events']);
    }
}