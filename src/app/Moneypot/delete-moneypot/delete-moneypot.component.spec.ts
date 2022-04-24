import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMoneypotComponent } from './delete-moneypot.component';

describe('DeleteMoneypotComponent', () => {
  let component: DeleteMoneypotComponent;
  let fixture: ComponentFixture<DeleteMoneypotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMoneypotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMoneypotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
