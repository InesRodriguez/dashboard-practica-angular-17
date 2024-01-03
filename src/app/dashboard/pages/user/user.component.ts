import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  template: `
    <app-title [title]="titleLabel()" />

    @if(user()){

    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
      <div>
        <h3>{{ user()?.first_name }} - {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>
    }@else{
    <p>Cargando información</p>
    }
  `
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UserService);
  private titleInfo ='Información del usuario'
  public titleLabel = computed(() => (this.user() ? `${this.titleInfo}: ${this.user()?.first_name} ${this.user()?.last_name}` : this.titleInfo));
  // public user = signal<User | undefined>(undefined);
  public user = toSignal(this.route.params.pipe(switchMap(({ id }) => this.usersService.getUserById(id))));
  constructor() {
    console.log(this.route.params);
  }
}
