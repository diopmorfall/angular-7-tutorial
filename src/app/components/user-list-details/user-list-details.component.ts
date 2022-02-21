import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: '[app-user-list-details]', //? we are using this selector as an attribute in another tag
    //? I could also use it as an element by adding ', app-user-list-details'
    templateUrl: './user-list-details.component.html',
    styleUrls: ['./user-list-details.component.scss']
})
export class UserListDetailsComponent implements OnInit {

    //@Input() name: string = '';
    @Input() user: User = new User(5, "Roronoa Zoro", "Straw Hats Pirates", false, 2_800_000_000);
    @Output() deleteUser: EventEmitter<number> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    delete(user: User){
        this.deleteUser.emit(user.id);
    }

}
