import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`);
  public frameworkAsSignal = signal<{ name: string; releaseDate: number }>({
    name: 'Angular',
    releaseDate: 2016
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {
      console.log('hecho');
      //this.frameworkAsProperty.name ='React'
      this.frameworkAsSignal.update((prop) => ({ ...prop, name: 'React' }));
    }, 3000);
  }
}
