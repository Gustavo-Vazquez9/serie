import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  /* variables globales
      input que obtiene el valor que viene del padre (calculo) 
      bandera para mostrar o no mostrar
      almacenamiento llamada resultado*/
  @Input() valorResultado: any;
  resultado:number = 0;
  muestra=false;

  /* metodo (hook) que nos ayuda a ejecutarse cada vez que hay un cambio en la propiedad (input)
     @param changes objeto que nos proporciona informacion sobre los cambios detectados
     @condicional verifica si hay cambios en valorResultado del objeto changes
     @condicional verifica si NO es el primer cambio (true) o cambios siguientes (false)*/
  ngOnChanges(changes: SimpleChanges) {
    if (changes['valorResultado']) {
      if(!changes['valorResultado'].firstChange){
          this.resultado=this.valorResultado;
          this.resultado === 0 ? this.muestra=false : this.muestra = true;

      }
    }
  }
}
