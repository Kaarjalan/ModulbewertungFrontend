import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprachlichComponent } from './sprachlich.component';

describe('SprachlichComponent', () => {
  let component: SprachlichComponent;
  let fixture: ComponentFixture<SprachlichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprachlichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprachlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
