import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'antispam'
})
export class AntispamPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): string {
        return value.replace("@", " AT ");
    }

}
