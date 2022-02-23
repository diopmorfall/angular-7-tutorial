import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private _userService: UserService) { }

    handleLogin(){
        this._userService.fetchUsers().subscribe(resp => { //* allows us to listen for the observable
            //! it can be listened only by one listener (unicast)
            console.log("The response here ", resp); //? it returns the response and we can access it
        });
    }

    ngOnInit(): void {
    }

}
