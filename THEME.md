To be able to write a custom theme you need to know about the elements, uiStates and uiModifiers.
This graphic shows you all elements with their states and modifiers.

cloukitSvg:https://cloukit.github.io/pagination/themeing/cloukit-pagination-decomposed.svg

&nbsp;

### Visual & Box Elements

cloukitSvg:https://cloukit.github.io/pagination/themeing/cloukit-pagination-states-and-modifiers.svg


&nbsp;

### Write your own Theme

Below you can see the two themes provided by pagination. You can easily extend one of the existing themes and change it to your needs. But do not forget to register it at the [`CloukitThemeService`](https://cloukit.github.io/#/guide/themeing).

A new theme with a red outline would be created like so:

```typescript
import { CloukitPaginationComponentThemeDefault } from '@cloukit/pagination';

export class MyRedPaginationTheme extends CloukitPaginationComponentThemeDefault {
  constructor() {
    super();
    const wrapperUntoggledBase = this.getElementTheme('button', 'active', 'base');
    wrapperUntoggledBase.styleDef.style.backgroundColor = 'red';
  }
}
```
