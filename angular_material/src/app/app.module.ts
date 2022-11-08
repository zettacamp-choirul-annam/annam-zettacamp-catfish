import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PromoModule } from './promo/promo.module';
import { SchoolModule } from './school/school.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule,
            GraphQLModule,
            HttpClientModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            PromoModule,
            SchoolModule,
            SearchModule,
            SharedModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
