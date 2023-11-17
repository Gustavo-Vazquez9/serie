import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  @Input() valorResultado: any;
  resultado:number = 0;
  muestra=false;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['valorResultado']) {
      if(!changes['valorResultado'].firstChange){
          this.resultado=this.valorResultado;
          this.resultado === 0 ? this.muestra=false : this.muestra = true;

      }
    }
  }
}
