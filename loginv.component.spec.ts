import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginvComponent } from './loginv.component';

describe('LoginvComponent', () => {
  let component: LoginvComponent;
  let fixture: ComponentFixture<LoginvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
