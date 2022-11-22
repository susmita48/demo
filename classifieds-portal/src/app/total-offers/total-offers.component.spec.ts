import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOffersComponent } from './total-offers.component';

describe('TotalOffersComponent', () => {
  let component: TotalOffersComponent;
  let fixture: ComponentFixture<TotalOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
