import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViewComponent } from './info-view.component';

describe('InfoViewComponent', () => {
  let component: InfoViewComponent;
  let fixture: ComponentFixture<InfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
