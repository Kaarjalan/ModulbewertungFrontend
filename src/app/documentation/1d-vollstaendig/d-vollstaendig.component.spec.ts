import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVollstaendigComponent } from './d-vollstaendig.component';

describe('DVollstaendigComponent', () => {
  let component: DVollstaendigComponent;
  let fixture: ComponentFixture<DVollstaendigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DVollstaendigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DVollstaendigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
