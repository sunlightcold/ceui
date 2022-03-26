/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiToastComponent } from '../toast.component';

describe('ToastComponent', () => {
  let component: CeuiToastComponent;
  let fixture: ComponentFixture<CeuiToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiToastComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
