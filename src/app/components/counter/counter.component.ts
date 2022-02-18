import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
	})
export class CounterComponent implements OnInit {
	value: number = 0;
	@Output() limitReached: EventEmitter<void> = new EventEmitter();
	//* void is the type of the payload of the event we emit
	//* the event is emitted inside the component, but we can make it go outside with @Output()
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
			this.limitReached.emit();
		}
	}

	ngOnInit(): void {
	}

}
