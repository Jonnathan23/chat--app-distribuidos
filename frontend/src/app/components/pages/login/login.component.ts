import { Component } from '@angular/core';
import { default_user } from '../../../../assets/data/db';
import { UserChat } from '../../../../assets/models/models';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  users:UserChat[] = [...default_user]

  login(){

  }

}
