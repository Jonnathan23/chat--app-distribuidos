import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private messagesChat = new BehaviorSubject<string[]>([])
  $messagesChat:Observable<string[]> = this.messagesChat.asObservable()

  socket!:Socket  

  constructor(){ 
    this.socket = io('http://localhost:4000/chat-js', { path: '/socket.io' });
 
    
    this.socket.on('chat message', (message:string) => { 
      console.log(`Get message: ${message}`)     
      this.updateMessages(message)
    });
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  private updateMessages(message:string){
    const currentMessages = this.messagesChat.getValue();
    this.messagesChat.next([...currentMessages, message]); 
  }

  getMessages(){
    return this.$messagesChat
  }  
  
}
