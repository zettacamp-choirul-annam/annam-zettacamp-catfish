import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { PostRoutingModule } from './post-routing.module';

// angular materials

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
      declarations: [
            PostComponent,
            PostListComponent,
            PostFormComponent,
            PostCardComponent
      ],
      imports: [
            CommonModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule,
            PostRoutingModule,

            // angular material
            MatButtonModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatToolbarModule
      ],
      exports: [
            PostComponent
      ]
})
export class PostModule { }
