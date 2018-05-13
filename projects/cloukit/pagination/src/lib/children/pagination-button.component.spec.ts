/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloukitPaginationButtonComponent } from './pagination-button.component';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitPaginationComponentThemeDefault } from '../pagination.theme';
import { PaginationButtonType } from '../pagination.model';
import { PaginationItem } from 'projects/cloukit/pagination/src/public_api';

class MockCloukitThemeService {
  public prefixStyle(x: any) {
    return x;
  }
}

describe('PaginationButtonComponent', () => {
  let component: CloukitPaginationButtonComponent;
  let fixture: ComponentFixture<CloukitPaginationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitPaginationButtonComponent ],
      providers: [ { provide: CloukitThemeService, useClass: MockCloukitThemeService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitPaginationButtonComponent);
    component = fixture.componentInstance;
    // @Input()
    component.themeSelected = new CloukitPaginationComponentThemeDefault();
    component.type = PaginationButtonType.normal;
    component.paginationItem = new PaginationItem(1, false, false, 'foo');
    component.disabled = false;
    // -
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
