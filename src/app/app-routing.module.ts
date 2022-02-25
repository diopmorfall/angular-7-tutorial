import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoInfosComponent } from './components/todo-infos/todo-infos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { IsLoggedGuard } from './guards/is-logged.guard';

const routes: Routes = [{ //? one route for each component
    canActivate: [IsLoggedGuard], //* this page will be protected by the guard (can be many of them)
    component: UsersListComponent,
    path: 'users'
}, {
    component: UserDetailsComponent,
    path: 'users/:id' //* we can take a parameter now
}, {
    component: TodosListComponent,
    path: 'todos'
}, {
    component: TodoInfosComponent,
    path: 'todos/:id'
}, {
    component: LoginComponent,
    path: 'login'
}, {
    component: CounterComponent,
    path: 'counter'
}, {
    //* default home path
    component: HomeComponent,
    path: '',
    //! by default, whenever it'll find an empty fragment in the url it'll always show the home page
    //!  but what if my url is localhost:4200/users/7/ ??
    pathMatch: 'full' //* with this, it'll match only the domain url (localhost:4200)
}, {
    component: PageNotFoundComponent,
    path: '**' //* takes everything, and we can handle wrong paths
    //! must be the last route, or it'll override the next ones: angular reads the array (from [0] to [n])
    //? and takes the first matching route for each one (** matches everything)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //* configures the router only once
    //! (done multiple times overrides the previous routing settings)
    exports: [RouterModule] //* exported once it's configured
    //? app.module.ts imports these exports (including the routes)
})
export class AppRoutingModule { }
