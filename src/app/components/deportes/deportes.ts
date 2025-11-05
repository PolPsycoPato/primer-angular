import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deportes',
  imports: [CommonModule],
  templateUrl: './deportes.html',
  styleUrl: './deportes.css',
})
export class Deportes {

  public sports: string[] = [
    'Fútbol',
    'Baloncesto',
    'Tenis',
    'Natación',
    'Ciclismo',
    'Vóley'
  ];
}