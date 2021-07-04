/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiTooltipComponent } from '../tooltip.component';

describe('TooltipComponent', () => {
  let component: CeuiTooltipComponent;
  let fixture: ComponentFixture<CeuiTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeuiTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
