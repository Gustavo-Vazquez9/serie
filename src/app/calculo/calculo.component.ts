import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.css'
})
export class CalculoComponent {
  resultadoSerie : number = 0;

  /* metodo donde recibimos el valor del componente formulario
      @param valor
      se almacena el resultado en resultadoSerie*/
  recibeValor(valor : number)
  {
    this.resultadoSerie = this.serie(valor);
  }

  /* metodo donde se realiza la operacion de la serie 
    @param valor proporcionado
    @return resultado
    @condicional si es primo se hace la operacion con el valor primo, si no, se cambia el valor primo por 1*/
  serie(valor : number) : number {
    let resultado = 0;
      this.esPrimo(valor) ? 
       resultado = ( 2*valor*this.triangular(valor) ) / this.fibonacci(valor-2) :
       resultado = ( 2*1*this.triangular(valor) ) / this.fibonacci(valor-2)
       return resultado;
  }

  /* metodo donde se realiza la verificacion de si es primo o no 
    @param valor proporcionado
    @return true/false
    @condicional si es primo regresa true, si no es primo regresa false*/
  esPrimo(numero: number): boolean {
  if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  /* metodo donde se realiza la operacion triangular 
    @param valor proporcionado
    @return resultado*/
  triangular(numero: number) : number {
    return (numero*(numero+1)) / 2;
  }
  
  /* metodo donde se realiza la operacion fibonacci 
    @param valor proporcionado
    @return numero/resultado
    @condicional si es menor que 2 retorna el numero si no, regresa la sumatoria de la recursividad 
    @ejemplo 1+1+1+1....*/
  fibonacci(numero:number) : number {
    if (numero < 2) {
      return numero;
    } else {
      return this.fibonacci(numero - 1) + this.fibonacci(numero - 2);
    }
  }
}
