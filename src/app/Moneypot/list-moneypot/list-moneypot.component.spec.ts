import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoneypotComponent } from './list-moneypot.component';

describe('ListMoneypotComponent', () => {
  let component: ListMoneypotComponent;
  let fixture: ComponentFixture<ListMoneypotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoneypotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoneypotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
