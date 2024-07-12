import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxiVorgabenComponent } from './optisch.component';

describe('OptischComponent', () => {
  let component: PraxiVorgabenComponent;
  let fixture: ComponentFixture<PraxiVorgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraxiVorgabenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraxiVorgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
