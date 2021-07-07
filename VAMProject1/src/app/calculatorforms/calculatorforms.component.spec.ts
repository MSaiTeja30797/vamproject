import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorformsComponent } from './calculatorforms.component';

describe('CalculatorformsComponent', () => {
  let component: CalculatorformsComponent;
  let fixture: ComponentFixture<CalculatorformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
