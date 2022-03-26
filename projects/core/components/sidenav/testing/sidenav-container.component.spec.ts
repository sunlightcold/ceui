/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeuiSidenavContainerComponent } from '../sidenav-container.component';

describe('SidenavContainerComponent', () => {
  let component: CeuiSidenavContainerComponent;
  let fixture: ComponentFixture<CeuiSidenavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CeuiSidenavContainerComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuiSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
