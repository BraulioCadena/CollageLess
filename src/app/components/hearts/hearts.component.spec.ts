import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartsComponent } from './hearts.component';

describe('HeartsComponent', () => {
  let component: HeartsComponent;
  let fixture: ComponentFixture<HeartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
