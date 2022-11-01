import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalAccentPipe } from './pipes/normal-accent.pipe';
import { MaterialsModule } from './materials/materials.module';
import { CombineWordsPipe } from './pipes/combine-words.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';


@NgModule({
      declarations: [
            NormalAccentPipe,
            CombineWordsPipe,
            FilterPipe,
            HighlightPipe
      ],
      imports: [
            CommonModule
      ],
      exports: [
            NormalAccentPipe,
            CombineWordsPipe,
            FilterPipe,
            HighlightPipe,
            MaterialsModule
      ]
})
export class SharedModule { }
