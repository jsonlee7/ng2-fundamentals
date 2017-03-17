import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styles: [`
    em { float: right; color:#E05C65; padding-left:10px; }
    .error input {background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder {color: #E999; }
    .error ::-moz-placeholder {color: #E999; }
    .error :-moz-placeholder {color: #E999; }
    .error ::-ms-input-placeholder {color: #E999; }
    `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(
        private router: Router,
        private auth: AuthService,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.firstName = new FormControl(
            this.auth.currentUser.firstName,
            [Validators.required, Validators.pattern('[a-zA-z].*')]);
        this.lastName = new FormControl(
            this.auth.currentUser.lastName,
            [Validators.required, Validators.pattern('[a-zA-z].*')]);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.auth.updateUser(formValues.lastName, formValues.firstName);
            this.router.navigate(['events']);
        } else {
            this.toastr.error('First Name and Last Name are required.','Form Invalid.');
        }

    }

    validateLastName() {
        return this.lastName.invalid && this.lastName.touched
    }
    validateFirstName() {
        return this.firstName.invalid && this.firstName.touched
    }

    cancel() {
        this.router.navigate(['events']);
    }
}