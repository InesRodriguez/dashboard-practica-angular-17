import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal('F');
  public frameworks = signal(['Angular', 'Vue', 'Qwik', 'React']);
  public toggleContent() {
    this.showContent.update((state) => !state);
  }
}
