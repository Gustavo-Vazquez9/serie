import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{
  formGroup! : FormGroup;
  @Output() onValor = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      valor: ['1', 
              Validators.required
             ]
    });
  }

  introducirValor()
  {
    if(this.formGroup.valid)
    {
      this.onValor.emit(this.formGroup.get('valor')?.value);
    }
  }

  actualizarResultado()
  {
    this.onValor.emit(0);
  }
}
