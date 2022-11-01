import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/user/models/user.model';

// import pipes

import { NormalAccentPipe } from './normal-accent.pipe';
import { CombineWordsPipe } from './combine-words.pipe';

@Pipe({
      name: 'filter',
})
export class FilterPipe implements PipeTransform {
      private normalAccent = new NormalAccentPipe();
      private combineWords = new CombineWordsPipe();

      transform(users: User[], keyword: string): User[] {
            if (users.length == 0 || !keyword) return users;

            keyword = this.equalize(keyword);

            const filtered = users.filter(user => {
                  const name = this.equalize(user.name);
                  return name.includes(keyword);
            });

            return filtered;
      }

      private equalize(text: string) {
            let equalized = this.normalAccent.transform(text);
                equalized = this.combineWords.transform(equalized);
                
            return equalized;
      }
}