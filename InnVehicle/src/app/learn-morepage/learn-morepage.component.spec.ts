import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMorepageComponent } from './learn-morepage.component';

describe('LearnMorepageComponent', () => {
  let component: LearnMorepageComponent;
  let fixture: ComponentFixture<LearnMorepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMorepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMorepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
