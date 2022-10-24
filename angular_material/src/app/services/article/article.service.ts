import { Injectable } from '@angular/core';

import { ArticleType } from 'src/app/articles.type';
import { articleMock } from 'src/app/articles.mock';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: ArticleType[] = articleMock;

  constructor() { }

  getArticle(): ArticleType[] {
    return this.articles; 
  }

  updateArticle(id: number, data: ArticleType): ArticleType {
    this.articles[id] = data;
    return this.articles[id];
  }
}
