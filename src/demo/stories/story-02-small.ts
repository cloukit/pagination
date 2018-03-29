import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'story-02-small',
  templateUrl: './story-02-small.html',
  styles: [ ].concat(DemoComponent.sharedStyles),
})
export class Story02Component {

  totalPages = 3;
  currentPage = 1;

  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }

}
