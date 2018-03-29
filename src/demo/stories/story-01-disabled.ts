import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'story-01-disabled',
  templateUrl: './story-01-disabled.html',
  styles: [ ].concat(DemoComponent.sharedStyles),
})
export class Story01Component {

  totalPages = 50;
  currentPage = 1;

  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }

}
