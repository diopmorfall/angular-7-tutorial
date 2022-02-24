import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public email: string = '';
    public password: string= '';
    constructor(private _userService: UserService) { 
        setTimeout(() => this.email = 'hero.garp@marines.op', 5000);
        //* this shows that [(ngModel)] is a two-ways data binding
        //? from the component to the template (second way)
    }

    handleLogin(f: NgForm){ //? f represents the form object
        if(f.invalid) return; //* if the form is invalid (invalid = true)
        console.log(this.email, this.password);
        
        /*
        this._userService.fetchUsers().subscribe(resp => { //* allows us to listen for the observable
            //! it can be listened only by one listener (unicast)
            console.log("The response here ", resp); //? it returns the response and we can access it
        });
        */
    }

    ngOnInit(): void {
    }

}
