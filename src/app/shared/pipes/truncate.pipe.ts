import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    number: number = 10,
    showDots: boolean = true,
    enableTruncate: boolean = true
  ): string | null | undefined {
    if (value && enableTruncate) {
      if (value.length > number && showDots) return `${value.substring(0, number)}...`;
      else return value.substring(0, number);
    }
    return value;
  }
}
