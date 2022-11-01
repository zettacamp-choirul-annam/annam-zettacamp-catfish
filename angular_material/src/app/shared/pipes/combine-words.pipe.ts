import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
      name: 'combineWords'
})
export class CombineWordsPipe implements PipeTransform {

      transform(value: string): string {
            return value.replace(/\s/g, '').toLowerCase();
      }

}
