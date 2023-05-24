import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meuprimeiro3Component } from './meuprimeiro3.component';

describe('Meuprimeiro3Component', () => {
  let component: Meuprimeiro3Component;
  let fixture: ComponentFixture<Meuprimeiro3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Meuprimeiro3Component]
    });
    fixture = TestBed.createComponent(Meuprimeiro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
