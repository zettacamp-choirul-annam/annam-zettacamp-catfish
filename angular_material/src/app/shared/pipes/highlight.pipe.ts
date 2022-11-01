import { Pipe, PipeTransform } from '@angular/core';
import { NormalAccentPipe } from './normal-accent.pipe';

@Pipe({
      name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
      private normalAccent = new NormalAccentPipe();

      transform(value: string, term: string): string {
            if (!term) return value;

            let _value = this.normalAccent.transform(value);
            let _term  = term.split('').map(char => char + '( )?').join('');

            const regex  = new RegExp(`(${_term})`, 'i');
            const marked = _value.replace(regex, '<mark>$1</mark>');
            
            return marked;
      }

}
