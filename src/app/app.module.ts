import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListDetailsComponent } from './components/user-list-details/user-list-details.component';
import { HighlightDirective } from './components/directives/highlight.directive';

@NgModule({
    declarations: [ //* components, pipes and directives declared here
        AppComponent,
        CounterComponent,
        UsersListComponent,
        UserListDetailsComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
