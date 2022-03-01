import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService extends ErrorHandler{

    constructor(private _http: HttpClient) { 
        super();
        console.log("Logger");
    }

    override handleError(error: any): void {
        //? including HttpClient, I can use it to send errors to a server
        //* we should get the errors in some way, without bothering the users
        this._http.post("server-that-handles-errors", {
            error //* this replaces error: error, they have the same name
        });
        super.handleError(error);
    }
}
