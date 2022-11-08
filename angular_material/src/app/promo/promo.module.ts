import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './promo.component';
import { PromoRoutingModule } from './promo-routing.module';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
      declarations: [
            PromoComponent,
            CardComponent,
            ListComponent
      ],
      imports: [
            CommonModule,
            PromoRoutingModule,
            SharedModule
      ],
      exports: [
            PromoComponent
      ]
})
export class PromoModule { }
