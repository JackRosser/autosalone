import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpelComponent } from './opel.component';

describe('OpelComponent', () => {
  let component: OpelComponent;
  let fixture: ComponentFixture<OpelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
