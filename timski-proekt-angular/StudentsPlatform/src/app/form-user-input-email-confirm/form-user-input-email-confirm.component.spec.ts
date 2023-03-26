import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserInputEmailConfirmComponent } from './form-user-input-email-confirm.component';

describe('FormUserInputEmailConfirmComponent', () => {
  let component: FormUserInputEmailConfirmComponent;
  let fixture: ComponentFixture<FormUserInputEmailConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserInputEmailConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserInputEmailConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
