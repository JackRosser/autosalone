import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownElementsComponent } from './dropdown-elements.component';

describe('DropdownElementsComponent', () => {
  let component: DropdownElementsComponent;
  let fixture: ComponentFixture<DropdownElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
