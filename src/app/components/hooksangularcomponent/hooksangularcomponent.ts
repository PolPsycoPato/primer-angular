import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-hooksangularcomponent',
  imports: [],
  templateUrl: './hooksangularcomponent.html',
  styleUrl: './hooksangularcomponent.css',
})
export class Hooksangularcomponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // ✅ Propiedad de entrada (para detectar cambios con ngOnChanges)
  @Input() contador: number = 0;

  constructor() {
    console.log('👷‍♂️ Constructor: El componente se está creando');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔄 ngOnChanges: Se detectó un cambio en las propiedades @Input');
    console.log('Cambios detectados:', changes);
  }

  ngOnInit(): void {
    console.log('🚀 ngOnInit: El componente se ha inicializado');
  }

  ngDoCheck(): void {
    console.log('🧐 ngDoCheck: Angular verifica cambios manualmente');
  }

  ngAfterContentInit(): void {
    console.log('📦 ngAfterContentInit: Contenido proyectado inicializado');
  }

  ngAfterContentChecked(): void {
    console.log('🔁 ngAfterContentChecked: Contenido proyectado verificado');
  }

  ngAfterViewInit(): void {
    console.log('👁️ ngAfterViewInit: La vista del componente se inicializó');
  }

  ngAfterViewChecked(): void {
    console.log('✅ ngAfterViewChecked: La vista del componente fue verificada');
  }

  ngOnDestroy(): void {
    console.log('💀 ngOnDestroy: El componente será destruido');
  }
}
