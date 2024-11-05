import { ChangeDetectorRef, Component } from '@angular/core';
import { default_user } from '../../../../assets/data/db';
import { UserChat } from '../../../../assets/models/models';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  users:UserChat[] = [...default_user]
  name = ""
  newUser: UserChat = {username:''};  

}
