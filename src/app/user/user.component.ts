import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  faUserCircle = faUserCircle;
  user=JSON.parse(localStorage.getItem('user')||'{}')
  constructor(private modalService: NgbModal,public userService: UserService) { }
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
}
