import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.less']
})

export class SignInComponent implements OnInit {

  getName(inputName) {
    localStorage.setItem('name', inputName);
  }
};
