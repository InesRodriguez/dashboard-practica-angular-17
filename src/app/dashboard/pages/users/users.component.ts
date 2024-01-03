import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export default class UsersComponent {
  public userService = inject(UserService);
}
