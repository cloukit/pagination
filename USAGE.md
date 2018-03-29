<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

Import the needed modules in your main module

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports pagination and theme
import { CloukitPaginationModule } from '@cloukit/pagination';
import { CloukitThemeModule } from '@cloukit/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports for pagination and theme
    CloukitThemeModule,
    CloukitPaginationModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

&nbsp;

### Use the pagination

Use it like so

```html
<cloukit-pagination
  [total]="totalPages"
  [current]="currentPage"
  (onPageSelect)="selectPage($event)"
>
</cloukit-pagination>
```

For more complex examples see the source code of the Demo Stories above.


