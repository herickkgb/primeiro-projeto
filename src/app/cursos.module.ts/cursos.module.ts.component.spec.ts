import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModuleTsComponent } from './cursos.module.ts.component';

describe('CursosModuleTsComponent', () => {
  let component: CursosModuleTsComponent;
  let fixture: ComponentFixture<CursosModuleTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosModuleTsComponent]
    });
    fixture = TestBed.createComponent(CursosModuleTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
