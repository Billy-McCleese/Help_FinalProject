import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaulter',
})
export class DefaulterPipe implements PipeTransform {
  transform(value: unknown | any, ...args: unknown[]): string {
    return value ?? '--';
  }
}
