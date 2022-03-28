import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSystemComponent } from './appointment-system.component';

describe('AppointmentSystemComponent', () => {
  let component: AppointmentSystemComponent;
  let fixture: ComponentFixture<AppointmentSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
