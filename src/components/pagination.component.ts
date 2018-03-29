/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { EventEmitter, Component, Input, OnChanges, Output } from '@angular/core';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition, CloukitThemeService,
} from '@cloukit/theme';
import { calculatePaginationItems } from '../logic/pagination-helper';
import { PaginationButtonClickEvent, PaginationButtonType, PaginationItem, Ui } from './pagination.model';

/**
 * Pagination Component.
 *
 * Just use this inside your templates:
 *
 * ```html
 * <cloukit-pagination ...></cloukit-pagination>
 * ```
 */
@Component({
  selector: 'cloukit-pagination',
  template: `
  <div [ngStyle]="getStyle('wrapper').style">
    <cloukit-pagination-button
      [disabled]="!isPreviousPossible() || disabled"
      [paginationItem]="previousDummyPaginationItem()"
      [themeSelected]="themeSelected"
      [type]="PaginationButtonType['previous']"
      (onClick)="selectPage($event)"
    ></cloukit-pagination-button>
    <cloukit-pagination-button
      *ngFor="let page of state.pages"
      [disabled]="disabled"
      [paginationItem]="page"
      [themeSelected]="themeSelected"
      [type]="PaginationButtonType['normal']"
      (onClick)="selectPage($event)"
    ></cloukit-pagination-button>
    <cloukit-pagination-button
      [disabled]="!isNextPossible() || disabled"
      [paginationItem]="nextDummyPaginationItem()"
      [themeSelected]="themeSelected"
      [type]="PaginationButtonType['next']"
      (onClick)="selectPage($event)"
    ></cloukit-pagination-button>
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
   * External way to disable the whole pagination e.g.
   * during loading external data
   */
  @Input()
  public disabled: boolean = false;

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
   */
  @Output()
  public onPageSelect: EventEmitter<number> = new EventEmitter();

  // INTERNAL VARIABLES
  public themeSelected: CloukitComponentTheme;
  public PaginationButtonType = PaginationButtonType;
  public state = {
    pages: []
  };

  constructor(private themeService: CloukitThemeService) {
    this.themeSelected = this.themeService.getComponentTheme('pagination');
  }

  public getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.themeSelected.getStyle(element, 'normal', 'base');
    return this.themeService.prefixStyle(style);
  }

  /**
   * @overrides OnChanges
   * @hidden
   */
  ngOnChanges() {
    if (this.theme !== undefined && this.theme !== null) {
      this.themeSelected = this.themeService.getComponentTheme(this.theme);
      if (this.themeSelected === null) {
        console.log(`WARN: requested theme ${this.theme} does not exist. Falling back to default theme for pagination.`);
        this.themeSelected = this.themeService.getComponentTheme('pagination');
      }
    }
    this.state.pages = calculatePaginationItems(this.total, this.current);
  }

  selectPage(event: PaginationButtonClickEvent) {
    if (event.type === PaginationButtonType['previous'] &&
      this.isPreviousPossible()) {
      this.onPageSelect.emit(this.current - 1);
    } else if (event.type === PaginationButtonType['next'] &&
      this.isNextPossible()) {
      this.onPageSelect.emit(this.current + 1);
    } else if (event.type === PaginationButtonType['normal']) {
      this.onPageSelect.emit(event.page);
    }
  }

  previousDummyPaginationItem() {
    let label = 'Prev';
    if (this.labelPrev !== undefined && this.labelPrev !== null) {
      label = this.labelPrev;
    }
    return new PaginationItem(-1, false, false, label);
  }

  nextDummyPaginationItem() {
    let label = 'Next';
    if (this.labelNext !== undefined && this.labelNext !== null) {
      label = this.labelNext;
    }
    return new PaginationItem(-1, false, false, label);
  }

  isPreviousPossible() {
    return this.current > 1;
  }

  isNextPossible() {
    return this.current < this.total;
  }

}

