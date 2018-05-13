import { Component } from '@angular/core';

@Component({
  selector: 'cloukit-story-02-small',
  templateUrl: './story-02-small.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story02Component {

  totalPages = 3;
  currentPage = 1;

  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }

}
