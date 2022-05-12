import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOppointmentComponent } from './delete-oppointment.component';

describe('DeleteOppointmentComponent', () => {
  let component: DeleteOppointmentComponent;
  let fixture: ComponentFixture<DeleteOppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
