import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaymentDetailsByNICComponent } from './get-payment-details-by-nic.component';

describe('GetPaymentDetailsByNICComponent', () => {
  let component: GetPaymentDetailsByNICComponent;
  let fixture: ComponentFixture<GetPaymentDetailsByNICComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPaymentDetailsByNICComponent]
    });
    fixture = TestBed.createComponent(GetPaymentDetailsByNICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
