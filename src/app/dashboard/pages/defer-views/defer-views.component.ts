import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoardersSlowComponent } from '@shared/heavy-loarders/heavy-loarders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoardersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {}
