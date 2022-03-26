/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiImageComponent } from '../image.component';

describe('ImageComponent', () => {
  let component: CeuiImageComponent;
  let fixture: ComponentFixture<CeuiImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiImageComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
