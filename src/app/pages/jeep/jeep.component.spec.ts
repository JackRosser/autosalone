import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeepComponent } from './jeep.component';

describe('JeepComponent', () => {
  let component: JeepComponent;
  let fixture: ComponentFixture<JeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
