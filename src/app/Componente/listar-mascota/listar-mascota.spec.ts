import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMascota } from './listar-mascota';

describe('ListarMascota', () => {
  let component: ListarMascota;
  let fixture: ComponentFixture<ListarMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
