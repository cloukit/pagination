import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeModule } from '@cloukit/theme';
import { DemoComponent } from './demo.component';
import { CloukitPaginationModule } from '../index';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, CloukitThemeModule, CloukitPaginationModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule { }
