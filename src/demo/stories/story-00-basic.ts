import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'story-00-basic',
  templateUrl: './story-00-basic.html',
  styles: [ ].concat(DemoComponent.sharedStyles),
})
export class Story00Component {
  totalPages = 50;
  currentPage = 1;

  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }
}
