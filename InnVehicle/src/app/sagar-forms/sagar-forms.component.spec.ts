import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagarFormsComponent } from './sagar-forms.component';

describe('SagarFormsComponent', () => {
  let component: SagarFormsComponent;
  let fixture: ComponentFixture<SagarFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagarFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagarFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
