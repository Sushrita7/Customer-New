import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardvComponent } from './dashboardv.component';

describe('DashboardvComponent', () => {
  let component: DashboardvComponent;
  let fixture: ComponentFixture<DashboardvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
