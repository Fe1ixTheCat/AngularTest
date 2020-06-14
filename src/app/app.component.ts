import { Component, OnInit } from '@angular/core';
import { SignInComponent } from './signIn/signIn.component';
import { ChatComponent } from './chat/chat.component';

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  checkSession() {
    if (localStorage.getItem('name') == null) {
      return true;
    }
  }


}
