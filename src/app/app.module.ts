import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListDetailsComponent } from './components/user-list-details/user-list-details.component';
import { HighlightDirective } from './components/directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoInfosComponent } from './components/todo-infos/todo-infos.component';

@NgModule({
    declarations: [ //* components, pipes and directives declared here
        AppComponent,
        CounterComponent,
        UsersListComponent,
        UserListDetailsComponent,
        HighlightDirective,
        LoginComponent,
        HomeComponent,
        PageNotFoundComponent,
        UserDetailsComponent,
        LoaderComponent,
        TodosListComponent,
        TodoDetailsComponent,
        TodoInfosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, //* our router module
        FormsModule, //? to use forms with more angular functionalities
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
