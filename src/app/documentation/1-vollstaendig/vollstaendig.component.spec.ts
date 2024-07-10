import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VollstaendigComponent } from './vollstaendig.component';

describe('VollstaendigComponent', () => {
  let component: VollstaendigComponent;
  let fixture: ComponentFixture<VollstaendigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VollstaendigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VollstaendigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
