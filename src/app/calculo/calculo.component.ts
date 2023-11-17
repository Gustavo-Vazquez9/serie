import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.css'
})
export class CalculoComponent {
  resultadoSerie : number = 0;

  recibeValor(valor : number)
  {
    this.resultadoSerie = this.serie(valor);
  }


  serie(valor : number) : number {
    let resultado = 0;
      this.esPrimo(valor) ? 
       resultado = ( 2*valor*this.triangular(valor) ) / this.fibonacci(valor-2) :
       resultado = ( 2*1*this.triangular(valor) ) / this.fibonacci(valor-2)
       return resultado;
  }


  esPrimo(numero: number): boolean {
  if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // No es primo
      }
    }
    return true; // Es primo
  }


  triangular(numero: number) : number {
    return (numero*(numero+1)) / 2;
  }

  
  fibonacci(numero:number) : number {
    if (numero < 2) {
      return numero;
    } else {
      return this.fibonacci(numero - 1) + this.fibonacci(numero - 2);
    }
  }
}
