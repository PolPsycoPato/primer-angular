// Importamos el decorador 'Component' desde el núcleo de Angular.
// Este decorador permite convertir una clase normal de TypeScript en un componente de Angular.
import { Component } from '@angular/core';

// ⚙️ UN COMPONENTE DEBE TENER SIEMPRE UNA DECLARACIÓN DE SU CONTENIDO
// Esto quiere decir que debe definirse cómo se va a ver (su template) y cómo se comporta (su clase).

@Component({
  // 📛 DEBEMOS DECLARAR EL NOMBRE DEL COMPONENTE
  // Este nombre se usa como etiqueta HTML personalizada en la vista (por ejemplo: <app-home></app-home>).
  // En Angular, por convención, los selectores usan guiones para separar palabras.

  selector: 'app-home',


  // 'imports' se utiliza (a partir de Angular 15 con componentes standalone)
  // para importar otros componentes, directivas o pipes que este componente necesite.
  // En este caso, está vacío porque no se están usando otros elementos todavía.
  imports: [],

  // 'templateUrl' indica la ruta al archivo HTML que contiene la vista del componente.
  // Aquí se define el diseño y contenido visual del componente.
  templateUrl: './home.html',

  // ⚠️ Aquí hay un pequeño error: debe ser **styleUrls** (plural), no 'styleUrl'. Este esopcional.
  // 'styleUrls' es un arreglo de archivos CSS que aplican estilos solo a este componente.
  styleUrls: ['./home.css'],
})

// 🧱 CADA COMPONENTE SIEMPRE DEBE TENER UNA CLASE ASOCIADA EN SU ARCHIVO (.ts)
// Esta clase define la parte lógica del componente: variables, métodos y comportamiento.
// Por convención, el nombre de la clase empieza con mayúscula (PascalCase).
// Además, si 'standalone' es false, este componente debe declararse dentro del módulo principal (app.module.ts).
export class Home {
  public titulo: string;
  public year: number;

  // Por ahora está vacía, pero aquí podrías definir variables, métodos, o eventos
  // que se usarán dentro de la plantilla (home.html).
  constructor() {
    this.titulo = 'Hola Mundo desde ANGULAR';
    this.year = 1111;
  }
}
