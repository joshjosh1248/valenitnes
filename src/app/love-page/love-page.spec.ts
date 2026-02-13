import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovePageComponent } from './love-page';

describe('LovePage', () => {
  let component: LovePageComponent;
  let fixture: ComponentFixture<LovePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LovePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
