import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { userRoutes } from './user.routes';
import { 
    LoginComponent, 
    ProfileComponent,
    AuthService } 
from './index';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)        
        ],
    exports: [],
    declarations: [ProfileComponent, LoginComponent],
    providers: [],
})
export class UserModule { }
