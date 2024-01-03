import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { HeavyLoardersFastComponent } from '@shared/heavy-loarders/heavy-loarders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoardersFastComponent,
    TitleComponent
  ],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferOptionsComponent { }
