import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ActorComponent } from './actor.component';
import { ActorRoutingModule } from './actor-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './list/card/card.component';



@NgModule({
      declarations: [
            ActorComponent,
            ListComponent,
            DetailComponent,
            CardComponent
      ],
      imports: [
            CommonModule,
            ActorRoutingModule,
            SharedModule
      ]
})
export class ActorModule { }
