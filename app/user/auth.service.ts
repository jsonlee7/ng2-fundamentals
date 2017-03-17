import { Injectable } from '@angular/core';
import { IUser } from './index';

@Injectable()
export class AuthService {
    currentUser: IUser;
    constructor() { }
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Jason',
            lastName: 'Lee'
        };
    }
    updateUser(lastName: string, firstName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
}