import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOppointmentComponent } from './update-oppointment.component';

describe('UpdateOppointmentComponent', () => {
  let component: UpdateOppointmentComponent;
  let fixture: ComponentFixture<UpdateOppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
