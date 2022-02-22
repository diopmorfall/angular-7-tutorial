import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    // numbers = ["Juki", "Goki", "Hatcha", "Jaki"];
    public users: User[] = [
        new User(1, 'Monkey D. Luffy', 'Straw Hats Pirates', true, 4_000_000_000),
        new User(2, 'Trafalgar D. Water Law', 'Heart Pirates', true, 3_500_000_000),
        new User(3, 'Killer', 'Kidd Pirates', false, 1_850_000_000),
        new User(4, "Shanks", "Red Haired Pirates", false, 4_064_000_000)
    ];

	constructor() { 
        console.log("New instance created");
    }

	ngOnInit(): void {
	}

    deleteUser(id: number){
        this.users = this.users.filter(user => {
            //? returning the elements of the array that match the condition
            return user.id !== id;
        });
    }
}
