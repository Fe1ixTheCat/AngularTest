import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { SignInComponent } from './signIn/signIn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    MessageComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
