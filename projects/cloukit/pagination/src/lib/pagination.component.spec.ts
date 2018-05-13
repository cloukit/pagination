/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloukitPaginationComponent } from './pagination.component';
import { CloukitPaginationButtonComponent, CloukitPaginationComponentThemeDefault } from '../public_api';
import { CloukitThemeService } from '@cloukit/theme';

class MockCloukitThemeService {
  public prefixStyle(x: any) {
    return x;
  }
  public getComponentTheme(x: any) {
    return new CloukitPaginationComponentThemeDefault();
  }
}

describe('PaginationComponent', () => {
  let component: CloukitPaginationComponent;
  let fixture: ComponentFixture<CloukitPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitPaginationComponent, CloukitPaginationButtonComponent ],
      providers: [ { provide: CloukitThemeService, useClass: MockCloukitThemeService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitPaginationComponent);
    component = fixture.componentInstance;
    // @Input()
    component.total = 20;
    component.current = 2;
    // -
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
