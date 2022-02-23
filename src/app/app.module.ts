import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListDetailsComponent } from './components/user-list-details/user-list-details.component';
import { HighlightDirective } from './components/directives/highlight.directive';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [ //* components, pipes and directives declared here
        AppComponent,
        CounterComponent,
        UsersListComponent,
        UserListDetailsComponent,
        HighlightDirective,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        //* UserService, manually registering the service does the same thing as below
        /*
        { //* manual registering done until Angular 6
            provide: UserService,
            useClass: UserService
        }
        */
       //? @Injectable({providedIn: 'root'}) from Angular 6 => automatically registered easily
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
