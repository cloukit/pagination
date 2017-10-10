/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { EventEmitter, Component, Input, OnChanges, Optional, Output } from '@angular/core';
import { CloukitPaginationComponentThemeDefault } from './pagination.theme';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitThemeService,
} from '@cloukit/theme';

/**
 * Pagination Component.
 *
 * Just use this inside your templates:
 *
 * ```html
 * <cloukit-pagination ...></cloukit-pagination >
 * ```
 */
@Component({
  selector: 'cloukit-pagination',
  template: `
  <div [ngStyle]="getStyle('wrapper').style">
    <button
      type="button"
      [ngStyle]="getStyle('button').style"
      (selectPage)="1"      
    >
      {{textPrevLabel()}}
    </button>
    <button
      type="button"
      [ngStyle]="getStyle('button').style"
      (selectPage)="2"
    >
      1
    </button>
    <button
      type="button"
      [ngStyle]="getStyle('button').style"
      (selectPage)="3"
    >
      {{textNextLabel()}}
    </button>
  </div>`,
  styles: [ ],
})
export class CloukitPaginationComponent implements OnChanges {

  /**
   * Optional theme selector. Only use `theme` when you have registered a valid theme
   * via the `CloukitThemeService` from [`@cloukit/theme`]{@link https://cloukit.github.io/#/component/theme}.
   */
  @Input()
  public theme: string;

  /**
   * Number of total Pages
   */
  @Input()
  public total: number;

  /**
   * Current Page
   */
  @Input()
  public current: number;

  /**
   * Optional Label for the "Next" button, defaults to "Next"
   */
  @Input()
  public labelNext: string;

  /**
   * Optional Label for the "Previous" button, defaults to "Prev"
   */
  @Input()
  public labelPrev: string;

  /**
   * Event emitted, when page is clicked.
   * @type {EventEmitter<any>}
   */
  @Output()
  public onPageSelect: EventEmitter<number> = new EventEmitter();

  private themeService: CloukitThemeService;
  private themeServiceFromExternal: boolean = false;
  private themeSelected: CloukitComponentTheme;
  private state = {
    uiModifier: 'base',
    uiState: 'normal',
  };

  constructor(@Optional() themeService: CloukitThemeService) {
    if (themeService === null) {
      this.themeService = new CloukitThemeService();
      this.themeService.registerComponentTheme('pagination', new CloukitPaginationComponentThemeDefault());
      this.themeServiceFromExternal = false;
    } else {
      this.themeService = themeService;
      this.themeServiceFromExternal = true;
    }
    this.themeSelected = this.themeService.getComponentTheme('pagination');
  }

  public getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.themeSelected.getStyle(element, this.state.uiState, this.state.uiModifier);
    return this.themeService.prefixStyle(style);
  }

  /**
   * @overrides OnChanges
   * @hidden
   */
  ngOnChanges() {
    if (this.theme !== undefined && this.theme !== null && this.themeServiceFromExternal) {
      this.themeSelected = this.themeService.getComponentTheme(this.theme);
    }
  }

  selectPage(page: number) {
    this.onPageSelect.emit(page);
  }

  textPrevLabel() {
    if (this.labelPrev !== undefined && this.labelPrev !== null) {
      return this.labelPrev;
    }
    return 'Prev';
  }

  textNextLabel() {
    if (this.labelNext !== undefined && this.labelNext !== null) {
      return this.labelNext;
    }
    return 'Next';
  }

}
