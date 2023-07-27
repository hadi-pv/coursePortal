import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faBook,faGraduationCap,faPen,faCalendar,faVideo,faHomeUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  faBook = faBook;
  faGraduationCap = faGraduationCap;
  faPen = faPen;
  faVideo = faVideo;
  faCalendar = faCalendar;
  faHomeUser = faHomeUser;
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}


