import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    user!: User;
    constructor(private _route: ActivatedRoute, private _userService: UserService) { 
        
    }

    ngOnInit(): void {
        const id = Number(this._route.snapshot.paramMap.get('id'));
        this._userService.getUser(id).subscribe(user => this.user = user);
        //! the only way to get the observable's data is to subscribe to it
    }

}
