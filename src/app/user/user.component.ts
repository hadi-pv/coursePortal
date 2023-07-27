import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  faUserCircle = faUserCircle;
}
