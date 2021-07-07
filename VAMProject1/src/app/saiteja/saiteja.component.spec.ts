import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaitejaComponent } from './saiteja.component';

describe('SaitejaComponent', () => {
  let component: SaitejaComponent;
  let fixture: ComponentFixture<SaitejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaitejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaitejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
