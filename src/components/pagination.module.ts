/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitPaginationComponent } from './pagination.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitPaginationComponent ],
  declarations: [ CloukitPaginationComponent ],
})
export class CloukitPaginationModule {}
