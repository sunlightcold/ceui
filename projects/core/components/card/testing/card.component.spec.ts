/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiCardComponent } from '../card.component';

describe('CardComponent', () => {
  let component: CeuiCardComponent;
  let fixture: ComponentFixture<CeuiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiCardComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
