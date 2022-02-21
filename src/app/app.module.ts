import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListDetailsComponent } from './components/user-list-details/user-list-details.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        UsersListComponent,
        UserListDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
