Use it like so

```html
  <cloukit-pagination
    [total]="totalPages"
    [current]="currentPage"
    (onPageSelect)="selectPage($event)"
  >
  </cloukit-pagination>
```


The `app.module.ts` would look like this.

```typescript
// (1) Import the Module
import { CloukitPaginationModule } from '@cloukit/pagination';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // (2) Register it under 'imports'
    CloukitPaginationModule
  ],
  declarations: [ /* ... */ ],
  providers: [ /* ... */ ],
  bootstrap: [ /* ... */ ]
})
export class AppModule {}
```
