import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loarders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]"></section>
  `
})
export class HeavyLoardersSlowComponent {
  @Input({ required: true }) cssClass!: String;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('cargado');
  }
}
