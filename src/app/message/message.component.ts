import {Component,OnInit, Input} from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'messageComponent',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})

export class MessageComponent implements OnInit {

  @Input() name;
  @Input() text;

}
