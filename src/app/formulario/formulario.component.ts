import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{

  /* variables globales
      fomr para el formgroup y un output para emitir el evento al componente padre */
  formGroup! : FormGroup;
  @Output() onValor = new EventEmitter<number>();

  /* se construye un constructor en donde con ayuda del formgroup tomamos el input (valor) 
      y le ponemos una validacion que sea requerida */
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      valor: ['1', 
              Validators.required
             ]
    });
  }

  /* metodo para introducir el valor
    verifica si es valido y si lo es emite el valor proporcionado*/
  introducirValor()
  {
    if(this.formGroup.valid)
    {
      this.onValor.emit(this.formGroup.get('valor')?.value);
    }
  }

  /* metodo para emitr valor cuando eliminemos el dato*/
  actualizarResultado()
  {
    this.onValor.emit(0);
  }
}
