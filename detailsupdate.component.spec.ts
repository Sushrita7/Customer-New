import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsupdateComponent } from './detailsupdate.component';

describe('DetailsupdateComponent', () => {
  let component: DetailsupdateComponent;
  let fixture: ComponentFixture<DetailsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
