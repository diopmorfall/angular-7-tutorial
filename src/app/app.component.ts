import { Component } from '@angular/core';
import { ILimitReached } from './interfaces/limit-reached.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
    counters = [5, 7, 0];
	title = 'Worororororo'; //* property binding - interpolation
	//* unidirectional passing data, from the component here to the html template
	

	constructor(){
		setTimeout(() => this.title = 'Zehahahaha', 5000);
	}

	public changeTitle(){
		this.title = 'Angular tutorial';
	}
	//? event binding goes from the template to the component (unidirectionally)
	public clicked(event: any){
		alert("Hai cliccato " + event.target.tagName);
	}

    handleLimitReached(p: ILimitReached){
        //? I  take an instance of the interface object we passed to it
        console.log(p);
    }
}
