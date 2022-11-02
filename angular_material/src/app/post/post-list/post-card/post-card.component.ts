import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
      selector: 'app-post-card',
      templateUrl: './post-card.component.html',
      styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
      @Input() post!: Post;

      constructor(
            private postService: PostService,
            private snackBar: MatSnackBar
      ) { }

      ngOnInit(): void { }

      onDelete() {
            this.postService.deletePost(this.post.id)
                  .then(() => {
                        this.snackBar.open('Post with ID:' + this.post.id + ' deleted crot', 'undonesia', {
                              duration: 2000
                        });
                  })
                  .catch(error => {
                        this.snackBar.open(error.message, '');
                  }) 
      }
}
