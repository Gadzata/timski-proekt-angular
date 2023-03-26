import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserInputRegisterComponent } from './form-user-input-register.component';

describe('FormUserInputRegisterComponent', () => {
  let component: FormUserInputRegisterComponent;
  let fixture: ComponentFixture<FormUserInputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserInputRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
