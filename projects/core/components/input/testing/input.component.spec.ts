/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiInputComponent } from '../input.component';

describe('InputComponent', () => {
  let component: CeuiInputComponent;
  let fixture: ComponentFixture<CeuiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeuiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
