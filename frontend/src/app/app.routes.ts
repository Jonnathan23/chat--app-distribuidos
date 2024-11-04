import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { ChatComponent } from './components/pages/chat/chat.component';

export const routes: Routes = [
    {path: 'default', component: LoginComponent},
    {path: 'chat', component:ChatComponent},    
    {path: 'header', component: LoginComponent},
    {path: '', redirectTo: 'default', pathMatch:'full'}
];
