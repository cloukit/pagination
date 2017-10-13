Use it like so

```html
<cloukit-pagination
  [total]="totalPages"
  [current]="currentPage"
  (onPageSelect)="selectPage($event)"
>
</cloukit-pagination>
```

Please note that you have to import [`CloukitThemeModule`](https://cloukit.github.io/#/component/theme) and `CloukitToggleModule`.
