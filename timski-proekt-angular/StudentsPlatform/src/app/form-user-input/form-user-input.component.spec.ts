import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserInputComponent } from './form-user-input.component';

describe('FormUserInputComponent', () => {
  let component: FormUserInputComponent;
  let fixture: ComponentFixture<FormUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
