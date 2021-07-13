/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiIconComponent } from '../icon.component';

describe('IconComponent', () => {
  let component: CeuiIconComponent;
  let fixture: ComponentFixture<CeuiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeuiIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
