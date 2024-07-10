import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptischComponent } from './optisch.component';

describe('OptischComponent', () => {
  let component: OptischComponent;
  let fixture: ComponentFixture<OptischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptischComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
