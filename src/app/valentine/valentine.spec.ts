import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineComponent } from './valentine';

describe('Valentine', () => {
  let component: ValentineComponent;
  let fixture: ComponentFixture<ValentineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
