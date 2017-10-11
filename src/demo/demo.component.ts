import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [ ],
})
export class DemoComponent {
  totalPages = 20;
  currentPage = 1;

  selectPage(page: number) {
    console.log(page);
    this.currentPage = page;
  }
}
