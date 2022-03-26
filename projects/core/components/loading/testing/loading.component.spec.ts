/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiLoadingComponent } from '../loading.component';

describe('LoadingComponent', () => {
  let component: CeuiLoadingComponent;
  let fixture: ComponentFixture<CeuiLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiLoadingComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
