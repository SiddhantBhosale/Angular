import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticComponentComponent } from './arithmetic-component.component';

describe('ArithmeticComponentComponent', () => {
  let component: ArithmeticComponentComponent;
  let fixture: ComponentFixture<ArithmeticComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
