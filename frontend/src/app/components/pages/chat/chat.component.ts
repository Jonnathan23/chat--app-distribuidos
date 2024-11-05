import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../../services/socket.service';
import { ActivatedRoute } from '@angular/router';
import { UserChat } from '../../../../assets/models/models';
import { default_user } from '../../../../assets/data/db';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  userActive: string = ''
  message = '';
  listMesages: string[] = []

  constructor(private serviceSocket: SocketService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((params) => this.userActive = params['username'])
    this.serviceSocket.getMessages().subscribe((msgs) => (this.listMesages = msgs))
  }

  sendMessage(){
    if(!this.userActive) this.userActive = default_user[0].username
    this.message && this.serviceSocket.sendMessage(this.message, this.userActive)
    this.message = ''
  }

}
