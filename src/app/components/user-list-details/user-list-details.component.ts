import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: '[app-user-list-details]', //? we are using this selector as an attribute in another tag
    //? I could also use it as an element by adding ', app-user-list-details'
    templateUrl: './user-list-details.component.html',
    styleUrls: ['./user-list-details.component.scss']
})
export class UserListDetailsComponent implements OnInit, OnChanges { //? OnInit class is required to use ngOnInit()

    @Input() user: User | undefined;
    @Output() deleteUser: EventEmitter<number> = new EventEmitter();
    constructor() { }

    delete(user: User){
        this.deleteUser.emit(user.id);
    }

    //* Hook methods

    ngOnInit(): void {
    }

    //* ngOnChanges fires multiple times during the construction of the template and its execution: fires
    //* at each state change in the component (determined by the input properties, it fires for each one)
    //? initially they'll be undefined, but when they'll get their value ngOnChanges fires
    //* detects changes with a ChangeDetector object, that notifies the component that runs the method

    ngOnChanges(element: SimpleChanges): void { //? we can get the element that changed
        console.log(element); //? in this case, when we create a new object
        // if('users' in element) {} //* the best way to check if a key is in the object
    }

    //* Digest cycle: used to check all the components to check it something changed somewhere, after the
    //* detected change
    //? after this ngDoCheck() is fired (after ngOnChanges): it allows to make our checks
    //* usually we use either this or ngOnChanges, because I can make checks in both methods

    //? Execution order: constructor => ngOnChanges => ngDoCheck => ngOnInit
}
