import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  pure: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value > 80) ? (value * 0.9) : value;
  }

}
