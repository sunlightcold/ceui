/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiFormFieldComponent } from '../form-field.component';

describe('FormFieldComponent', () => {
  let component: CeuiFormFieldComponent;
  let fixture: ComponentFixture<CeuiFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiFormFieldComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
