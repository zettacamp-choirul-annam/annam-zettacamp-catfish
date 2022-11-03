import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
      exports: [
            MatButtonModule,
            MatCardModule,
            MatToolbarModule,
            MatTabsModule,
            MatSidenavModule,
            MatIconModule,
            MatRippleModule
      ]
})
export class MaterialModule { }
