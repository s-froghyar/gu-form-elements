import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementsLibComponent } from './form-elements-lib.component';

describe('FormElementsLibComponent', () => {
  let component: FormElementsLibComponent;
  let fixture: ComponentFixture<FormElementsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElementsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
