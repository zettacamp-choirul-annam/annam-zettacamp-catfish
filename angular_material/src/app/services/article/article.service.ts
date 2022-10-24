import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { ArticleType } from 'src/app/articles.type';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: BehaviorSubject<ArticleType[]> = new BehaviorSubject<ArticleType[]>([]);

  constructor(private http: HttpClient) {
    this.fetchArticle().subscribe(data => {
      const articles: ArticleType[] = data;
      this.articles.next(articles);
    })
  }

  getArticles() {
    return this.articles.getValue();
  }

  updateLike(id: number, liked: boolean) {
    const articles = this.articles.getValue();
    articles[id].liked = liked;
    this.articles.next(articles);
  }

  updateSave(id: number, saved: boolean) {
    const articles = this.articles.getValue();
    articles[id].saved = saved;
    this.articles.next(articles);
  }

  fetchArticle(): Observable<any> {
    return this.http.get('../../../assets/articles.json');
  }
}
