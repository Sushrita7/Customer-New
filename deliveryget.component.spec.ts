import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverygetComponent } from './deliveryget.component';

describe('DeliverygetComponent', () => {
  let component: DeliverygetComponent;
  let fixture: ComponentFixture<DeliverygetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverygetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverygetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
