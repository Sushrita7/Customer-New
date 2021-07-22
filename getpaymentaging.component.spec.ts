import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpaymentagingComponent } from './getpaymentaging.component';

describe('GetpaymentagingComponent', () => {
  let component: GetpaymentagingComponent;
  let fixture: ComponentFixture<GetpaymentagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpaymentagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpaymentagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
