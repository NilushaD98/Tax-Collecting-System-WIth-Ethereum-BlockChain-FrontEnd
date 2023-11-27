import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaymentDetailsByComRegNumberComponent } from './get-payment-details-by-com-reg-number.component';

describe('GetPaymentDetailsByComRegNumberComponent', () => {
  let component: GetPaymentDetailsByComRegNumberComponent;
  let fixture: ComponentFixture<GetPaymentDetailsByComRegNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPaymentDetailsByComRegNumberComponent]
    });
    fixture = TestBed.createComponent(GetPaymentDetailsByComRegNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
