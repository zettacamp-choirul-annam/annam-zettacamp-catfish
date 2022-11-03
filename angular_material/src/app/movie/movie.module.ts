import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './list/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
