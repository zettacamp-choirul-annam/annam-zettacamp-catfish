import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleType } from 'src/app/articles.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ArticleService]
})
export class ListComponent implements OnInit {
  articles!: ArticleType[];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticle();
  }

  onLikeClick(id: number): void {
    const data = this.articles[id];
          data.liked = !data.liked;
    
    this.articles[id] = this.articleService.updateArticle(id, data);
  }

  onSaveClick(id: number): void {
    const data = this.articles[id];
          data.saved = !data.saved;
    
    this.articles[id] = this.articleService.updateArticle(id, data);
  }
}
