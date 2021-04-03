import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sebas del Zorra';
  numero:number = 10;
  base:number = 5;

  Sumar():number {
    return this.numero = this.numero+this.base;
  }

  Restar():number {
    return this.numero = this.numero-this.base;
  }

  Acumular(){
    return this.numero=0;
  }

}

