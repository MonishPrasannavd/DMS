import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerpageComponent } from './computerpage.component';

describe('ComputerpageComponent', () => {
  let component: ComputerpageComponent;
  let fixture: ComponentFixture<ComputerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
