import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeContainerComponent } from './code-container.component';

describe('ContainerComponent', () => {
  let component: CodeContainerComponent;
  let fixture: ComponentFixture<CodeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
