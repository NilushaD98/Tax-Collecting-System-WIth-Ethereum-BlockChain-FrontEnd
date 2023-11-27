import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPersonPaymentComponent } from './add-new-person-payment.component';

describe('AddNewPersonPaymentComponent', () => {
  let component: AddNewPersonPaymentComponent;
  let fixture: ComponentFixture<AddNewPersonPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewPersonPaymentComponent]
    });
    fixture = TestBed.createComponent(AddNewPersonPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
