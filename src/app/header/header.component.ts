import {Component} from '@angular/core';

@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {
  profile = 'https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg';

  clearSession() {
    localStorage.removeItem('name');
  }
}
