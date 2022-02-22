import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ //? directive decorator
    selector: '[appHighlight]'
    //* we'll use it as an attribute
})
export class HighlightDirective {

    private _previousColor: string = '';
    @Input('appHighlight') color: string = '';
    //* appHighlight is an alias for the color property: it allows to use the appHighlight attribute
    //* kinda a property (and I can keep it separate from the actual colorsince it's also a selector)

    constructor(private _el: ElementRef<HTMLElement>) { }
    //? has a reference of the element that fired the element, type htmlelement
    
    @HostListener('mouseover') //* this decorator listens that event
    //*  which fires on the element that has the directive declared as an attribute
    public highlight(): void{
        this._previousColor = this._el.nativeElement.style.backgroundColor;
        // console.log("Highlighted: " + this.color);
        this._el.nativeElement.style.backgroundColor = this.color;
        //? nativeElement is a property of ElementRef, it allows us to get the reference to the element
    }

    @HostListener('mouseout')
    public unhighlight(): void{
        // console.log("Unhighlighted: " + this._previousColor);
        this._el.nativeElement.style.backgroundColor = this._previousColor;
    }

}
