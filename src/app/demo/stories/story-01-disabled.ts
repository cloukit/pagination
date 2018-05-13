import { Component } from '@angular/core';

@Component({
  selector: 'cloukit-story-01-disabled',
  templateUrl: './story-01-disabled.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story01Component {

  totalPages = 50;
  currentPage = 1;

  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }

}
