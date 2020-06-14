import {Component, OnInit, Output} from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})

export class ChatComponent implements OnInit {

  name = localStorage.getItem('name');
  bases = JSON.parse(localStorage.getItem('messages'));

  

  sendMessage(text) {
    let message = {
      name: localStorage.getItem('name'),
      time: Date.now(),
      text: text.value
    }

    let itemName = localStorage.getItem('name');
    localStorage.removeItem('name');
    setTimeout(() => {
      localStorage.setItem('name', itemName);
    }, 1);

    let messages;


    if (localStorage.getItem('messages') == null) {
      messages = [];
      messages.push(message);
      localStorage.setItem('messages', JSON.stringify(messages));
    } else {
      messages = JSON.parse(localStorage.getItem('messages'));
      messages.push(message);
      localStorage.setItem('messages', JSON.stringify(messages));
    }

    text.value = '';
    //location.reload();
  }
}
