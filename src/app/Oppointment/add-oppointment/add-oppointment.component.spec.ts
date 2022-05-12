import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOppointmentComponent } from './add-oppointment.component';

describe('AddOppointmentComponent', () => {
  let component: AddOppointmentComponent;
  let fixture: ComponentFixture<AddOppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
