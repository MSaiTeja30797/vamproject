import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBindingComponent } from './twowaybinding.component';

describe('TwowayBindingComponent', () => {
  let component: TwowayBindingComponent;
  let fixture: ComponentFixture<TwowayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
