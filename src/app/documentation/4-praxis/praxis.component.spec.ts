import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisComponent } from './praxis.component';

describe('PraxisComponent', () => {
  let component: PraxisComponent;
  let fixture: ComponentFixture<PraxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraxisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
