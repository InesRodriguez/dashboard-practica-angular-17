import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: []
  });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  constructor() {
    console.log('Cargando data');
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1000))
      .subscribe((resp) => {
        this.#state.set({
          loading: false,
          users: resp.data
        });
      });
  }
}
