import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILimitReached } from 'src/app/interfaces/limit-reached.interface';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
	})
export class CounterComponent implements OnInit {
    //* this can take the value from the parent component
	@Input() value: number = 0; 
	//* the event is emitted inside the component, but we can send it outside with @Output()
	@Output() limitReached: EventEmitter<ILimitReached> = new EventEmitter();
	//* ILimitReached is the type of the payload of the event we emit
	constructor() { }

	//? classic solution
	/*
	incrementValue(event: MouseEvent){
		console.log(event);
		return this.value++;
	}

	decrementValue(event: MouseEvent){
		console.log(event);
		return this.value--;
	}
	*/

	//* best solution
	handleCounter(isSum: boolean){
		isSum ? this.value++ : this.value--;
		
		if(this.value === 10 || this.value === -10){
			this.limitReached.emit({
                //* I'm emitting an ILimitReached object as the event that we'll process
                value: 10,
                isNegative: this.value === -10
            });
		}
	}

	ngOnInit(): void {
	}

}
