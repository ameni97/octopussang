import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOppointmentComponent } from './list-oppointment.component';

describe('ListOppointmentComponent', () => {
  let component: ListOppointmentComponent;
  let fixture: ComponentFixture<ListOppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
