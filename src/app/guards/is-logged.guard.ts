import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable({ //* guards are services
    providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
    //? it can help us to limit the access to an  area of the project
    constructor(private _loaderService: LoaderService){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        //* this returns an Observable, a Promise or a boolean
        this._loaderService.isLoading = true; //? while loading the content, we add the loading icon
        //return false; //? and I can't access to the component that implements this guard
        return new Promise(resolve => setTimeout(() => {
            this._loaderService.isLoading = false; //? and we remove it once we load everything
            resolve(true);
        }, 5000));
        //* this delays the access to the page; this simulates the loading of data from an api in a page
        //? we can put a loading icon in the page that covers the section, that we show until it's ready
    }
    
}
