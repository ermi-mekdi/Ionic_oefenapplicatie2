import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    localId: string;
    expiresIn: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private _userIsAuthenticated = true;
    private _userId = null;

    get userIsAuthenticated () {
        return this._userIsAuthenticated;
    }

    get userId() {
        return this._userId;
    }

    constructor(private http: HttpClient) {}

    singup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'http:identitytoolkit.googleapis.com/v1accounts:singUp?key=${envionment.firebaseAPIkey}',
            { email: email, password: password, returnSecureToken: true }
        );
    }

    login() {
        this._userIsAuthenticated = true;

    }
    
    logout () {
        this._userIsAuthenticated = false;
    }
    }
