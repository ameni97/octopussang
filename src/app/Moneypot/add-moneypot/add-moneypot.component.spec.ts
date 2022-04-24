import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneypotComponent } from './add-moneypot.component';

describe('AddMoneypotComponent', () => {
  let component: AddMoneypotComponent;
  let fixture: ComponentFixture<AddMoneypotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoneypotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneypotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
