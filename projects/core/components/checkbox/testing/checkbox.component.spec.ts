/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiCheckboxComponent } from '../checkbox.component';

describe('CheckboxComponent', () => {
  let component: CeuiCheckboxComponent;
  let fixture: ComponentFixture<CeuiCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiCheckboxComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
