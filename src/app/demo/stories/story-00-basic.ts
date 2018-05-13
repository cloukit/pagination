import { Component } from '@angular/core';

@Component({
  selector: 'cloukit-story-00-basic',
  templateUrl: './story-00-basic.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story00Component {
  totalPages = 50;
  currentPage = 1;

  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }
}
