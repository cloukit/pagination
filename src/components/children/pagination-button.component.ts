/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { EventEmitter, Component, Input, Output, OnChanges } from '@angular/core';
import { CloukitComponentTheme, CloukitThemeService, UiElement } from '@cloukit/theme';
import { Ui } from '../pagination.model';
import { PaginationButtonClickEvent, PaginationButtonType, PaginationItem } from '../pagination.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'cloukit-pagination-button',
  template: `
    <button
      type="button"
      [disabled]="disabled"
      [ngStyle]="style"
      (click)="doClick()"
      (mouseenter)="mouseEnter()"
      (mouseleave)="mouseLeave()"
    >
      {{paginationItem.label}}
    </button>`,
  styles: [ ],
})
export class CloukitPaginationButtonComponent implements OnChanges {

  @Input()
  public disabled: boolean;

  @Input()
  public type: PaginationButtonType;

  @Input()
  public paginationItem: PaginationItem;

  @Input()
  public themeSelected: CloukitComponentTheme;

  @Output()
  public onClick: EventEmitter<PaginationButtonClickEvent> = new EventEmitter();

  //
  // INTERNAL
  //
  private ui: UiElement;
  public style: any;
  private isMouseStillOver = false;

  constructor(private themeService: CloukitThemeService) {
  }

  updateStyle() {
    const style = this.themeSelected.getUiStyle(this.ui);
    if (style !== null) {
      this.style = this.themeService.prefixStyle(style.style);
    }
  }

  ngOnChanges() {
    // retain mouseEnter and mouseLeave modifier changes!
    let modifier: string = null;
    if (this.ui !== null && this.ui !== undefined) {
      modifier = this.ui.modifier;
    }
    this.ui = CloukitPaginationButtonComponent.transform(this.paginationItem);
    if (modifier !== null && this.isMouseStillOver) {
      this.ui.modifier = modifier;
    }
    if (this.disabled === true) {
      this.ui.state = Ui.states.disabled;
      this.ui.modifier = Ui.modifier.base;
    }
    this.updateStyle();
  }

  mouseEnter() {
    this.ui.modifier = Ui.modifier.hover;
    this.isMouseStillOver = true;
    this.updateStyle();
  }

  mouseLeave() {
    this.ui.modifier = Ui.modifier.base;
    this.isMouseStillOver = false;
    this.updateStyle();
  }

  doClick() {
    if (!this.paginationItem.isFiller) {
      this.onClick.emit(new PaginationButtonClickEvent(this.type, this.paginationItem.page));
    }
  }

  public static transform(pageItem: PaginationItem): UiElement {
    if (isNullOrUndefined(pageItem)) {
      return new UiElement(Ui.elements.filler, Ui.states.disabled, Ui.modifier.base);
    }
    const uiElement = pageItem.isFiller ? Ui.elements.filler : Ui.elements.button;
    const uiState = pageItem.isActive ? Ui.states.active : Ui.states.normal;
    return new UiElement(uiElement, uiState, Ui.modifier.base)
  }

}

