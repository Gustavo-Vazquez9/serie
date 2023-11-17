import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

import { CalculoComponent } from './calculo.component';
import { By } from '@angular/platform-browser';
import { ResultadoComponent } from '../resultado/resultado.component';
import { FormularioComponent } from '../formulario/formulario.component';

describe('CalculoComponent', () => {
  let component: CalculoComponent;
  let fixture: ComponentFixture<CalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculoComponent, ResultadoComponent, FormularioComponent], 
      imports: [ReactiveFormsModule, InputNumberModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('calcular correctamente la serie para los primeros 10 números naturales', () => {
    const formularioComponent = fixture.debugElement.query(By.directive(FormularioComponent)).componentInstance;

    for (let i = 1; i <= 10; i++) {
      formularioComponent.onValor.emit(i);

      // Calcula el resultado esperado para el número i
      let resultadoEsperado = 0;
      if (component.esPrimo(i)) {
        resultadoEsperado = (2 * i * component.triangular(i)) / component.fibonacci(i - 2);
      } else {
        resultadoEsperado = (2 * 1 * component.triangular(i)) / component.fibonacci(i - 2);
      }

      // Verifica que el resultado actual sea igual al esperado
      expect(component.resultadoSerie).toBe(resultadoEsperado);
    }
  });

  it('mostrar el resultado en ResultadoComponent', () => {
    const resultadoComponent = fixture.debugElement.query(By.directive(ResultadoComponent)).componentInstance;

    component.resultadoSerie = 9; //  ajustar el valor según lo que esperas
    fixture.detectChanges();

    expect(resultadoComponent.valorResultado).toBe(9);
  });
});
