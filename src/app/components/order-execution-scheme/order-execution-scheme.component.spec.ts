import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderExecutionSchemeComponent} from './order-execution-scheme.component';

describe('OrderExecutionSchemeComponent', () => {
  let component: OrderExecutionSchemeComponent;
  let fixture: ComponentFixture<OrderExecutionSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderExecutionSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderExecutionSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
