import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachlichComponent } from './optisch.component';

describe('FachlichComponent', () => {
  let component: FachlichComponent;
  let fixture: ComponentFixture<FachlichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FachlichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FachlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
