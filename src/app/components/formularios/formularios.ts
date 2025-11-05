import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formularios.html',
  styleUrls: ['./formularios.css']
})
export class Formularios {
  // ✅ Creamos un único objeto para el modelo del formulario
  public user = {
    name: '',
    surname: '',
    years: 0,
    numbera: 0,
    numberb: 0
  };

  public suma: number = 0;

  constructor() {}

  // ✅ Método para sumar los números del segundo formulario
  sumarNumeros(): void {
    // Convertimos a número por si los inputs se leen como strings
    const a = Number(this.user.numbera);
    const b = Number(this.user.numberb);
    this.suma = a + b;
  }
}
