import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [ '.demo { font-family: sans-serif; }'],
})
export class DemoComponent {
  totalPages = 50;
  currentPage = 1;
  selectPage(page: number) {
    console.log(`selected page is ${page}`);
    this.currentPage = page;
  }

  totalPagesDemo2 = 3;
  currentPageDemo2 = 1;
  selectPageDemo2(page: number) {
    this.currentPageDemo2 = page;
  }
}
