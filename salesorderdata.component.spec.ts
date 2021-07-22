import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderdataComponent } from './salesorderdata.component';

describe('SalesorderdataComponent', () => {
  let component: SalesorderdataComponent;
  let fixture: ComponentFixture<SalesorderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesorderdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
