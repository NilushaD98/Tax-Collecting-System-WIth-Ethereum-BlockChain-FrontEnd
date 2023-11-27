import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCompanyPaymentComponent } from './add-new-company-payment.component';

describe('AddNewCompanyPaymentComponent', () => {
  let component: AddNewCompanyPaymentComponent;
  let fixture: ComponentFixture<AddNewCompanyPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCompanyPaymentComponent]
    });
    fixture = TestBed.createComponent(AddNewCompanyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
