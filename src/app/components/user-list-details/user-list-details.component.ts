import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: '[app-user-list-details]', //? we are using this selector as an attribute in another tag
    //? I could also use it as an element by adding ', app-user-list-details'
    templateUrl: './user-list-details.component.html',
    styleUrls: ['./user-list-details.component.scss']
})
export class UserListDetailsComponent implements OnInit { //? OnInit class is required to use ngOnInit()

    @Input() user: User = new User(10, "Roronoa Zoro", "lost@strawhats.com", "+3475892633", "kyutoryu.com");
    @Output() deleteUser: EventEmitter<number> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    delete(user: User){
        this.deleteUser.emit(user.id);
    }

}
