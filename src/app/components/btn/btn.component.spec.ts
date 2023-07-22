import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponent } from './btn.component';

describe('BtnComponent', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnComponent],
    });
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default values for @Input properties', () => {
    expect(component.buttonClass).toBe('btn-primary');
    expect(component.textButton).toBe('btn');
    expect(component.icon).toBe('fas fas-plus');
    expect(component.disabled).toBe(false);
  });

  it('should update the buttonClass when @Input buttonClass changes', () => {
    const newButtonClass = 'btn-secondary';
    component.buttonClass = newButtonClass;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.btn');
    expect(button.classList).toContain(newButtonClass);
  });
});
