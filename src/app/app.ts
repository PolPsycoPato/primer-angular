import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Hooksangularcomponent } from './components/hooksangularcomponent/hooksangularcomponent';
import { Deportes } from './components/deportes/deportes';
import { Formularios } from './components/formularios/formularios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Hooksangularcomponent,Deportes,Formularios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primer-angular');
}
