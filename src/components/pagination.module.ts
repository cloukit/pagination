/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitPaginationComponent } from './pagination.component';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitPaginationComponentThemeDefault } from './pagination.theme';
import { CloukitPaginationButtonComponent } from './children/pagination-button.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitPaginationComponent ],
  declarations: [ CloukitPaginationComponent, CloukitPaginationButtonComponent ],
})
export class CloukitPaginationModule {
  constructor(private themeService: CloukitThemeService) {
    if (this.themeService.getComponentTheme('pagination') === null) {
      this.themeService.registerComponentTheme('pagination', new CloukitPaginationComponentThemeDefault());
    }
  }
}
