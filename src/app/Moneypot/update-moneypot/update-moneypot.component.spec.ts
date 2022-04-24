import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMoneypotComponent } from './update-moneypot.component';

describe('UpdateMoneypotComponent', () => {
  let component: UpdateMoneypotComponent;
  let fixture: ComponentFixture<UpdateMoneypotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMoneypotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMoneypotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
