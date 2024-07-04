import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewertungHeaderComponent } from './bewertung-header.component';

describe('BewertungHeaderComponent', () => {
  let component: BewertungHeaderComponent;
  let fixture: ComponentFixture<BewertungHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BewertungHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BewertungHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
