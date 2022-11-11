import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http);
}

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            SharedModule,
            AppRoutingModule,
            CoreModule,
            HttpClientModule,
            TranslateModule.forRoot({
                  defaultLanguage: 'en',
                  loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                  }
            })
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
