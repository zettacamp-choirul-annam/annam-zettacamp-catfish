import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
      name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
      transform(value: string): string {
            let words = value.toLocaleLowerCase().split(' ');
                words = words.map(word => this.ucfirst(word));

            return words.join(' ');
      }

      private ucfirst(word: string): string {
            return word.slice(0, 1).toUpperCase() + word.substring(1);
      }
}
