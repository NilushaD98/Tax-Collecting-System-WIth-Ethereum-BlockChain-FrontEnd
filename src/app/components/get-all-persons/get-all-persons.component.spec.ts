import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPersonsComponent } from './get-all-persons.component';

describe('GetAllPersonsComponent', () => {
  let component: GetAllPersonsComponent;
  let fixture: ComponentFixture<GetAllPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllPersonsComponent]
    });
    fixture = TestBed.createComponent(GetAllPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
