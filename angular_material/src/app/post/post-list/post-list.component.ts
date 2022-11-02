import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
      selector: 'app-post-list',
      templateUrl: './post-list.component.html',
      styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
      subcription?: Subscription;
      posts: Post[] = [];

      constructor(private postService: PostService) { }

      ngOnInit(): void {
            this.subcription = this.postService.posts$.subscribe(posts => {
                  this.posts = posts;
            });
      }

      ngOnDestroy() {
            this.subcription && this.subcription.unsubscribe();
      }
}
