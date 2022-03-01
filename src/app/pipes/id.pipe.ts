import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'id'
})
export class IdPipe implements PipeTransform {

    transform(value: number, ...args: unknown[]): string {
        return `#${value}`;
    }

}
