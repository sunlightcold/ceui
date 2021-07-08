/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiRadioComponent } from '../radio.component';

describe('RadioComponent', () => {
  let component: CeuiRadioComponent;
  let fixture: ComponentFixture<CeuiRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeuiRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
