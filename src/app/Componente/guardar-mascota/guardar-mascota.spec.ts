import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarMascota } from './guardar-mascota';

describe('GuardarMascota', () => {
  let component: GuardarMascota;
  let fixture: ComponentFixture<GuardarMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
