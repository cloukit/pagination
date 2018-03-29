<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

Import the needed modules in your main module

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitPaginationModule } from '@cloukit/pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports
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


&nbsp;

### Version Compatibility

You can read the [release comments](https://github.com/cloukit/pagination/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=5.0.0         | 1.6.1 - current           |
| >=4.0.0         | 1.2.0 - 1.6.0             |

To install a specific version use:

```
yarn add @cloukit/pagination@1.6.0
```


