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
    this.articleService.articles.subscribe(data => {
      this.articles = data;
    })
  }

  onLikeClick(data: any): void {
    this.articleService.updateLike(data.id, data.liked);
  }

  onSaveClick(data: any): void {
    this.articleService.updateSave(data.id, data.saved);
  }
}
