import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>

    <h2>la base es: <strong>{{ base }}</strong></h2>

    <button (click)=" Sumar()">+1</button>

    <button (click)=" Restar()">-1</button>

    <button (click)="Acumular()">.l.</button>

    <span> {{ numero }}</span>  
    `
})


export class ContadorComponet {

    title = 'Sebas del Zorra';
    numero: number = 10;
    base: number = 5;

    Sumar(): number {
        return this.numero = this.numero + this.base;
    }

    Restar(): number {
        return this.numero = this.numero - this.base;
    }

    Acumular() {
        return this.numero = 0;
    }


}