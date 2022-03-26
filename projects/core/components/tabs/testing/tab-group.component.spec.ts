/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiTabGroupComponent } from '../tab-group.component';

describe('TabGroupComponent', () => {
  let component: CeuiTabGroupComponent;
  let fixture: ComponentFixture<CeuiTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiTabGroupComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
