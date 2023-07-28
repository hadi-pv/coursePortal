import { Component } from '@angular/core';
import { faBook,faGraduationCap,faPen,faCalendar,faVideo,faCog,faUser,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursePortal';
  sidebarExpanded = false;
  faBook = faBook;
  faGraduationCap = faGraduationCap;
  faPen = faPen;
  faVideo = faVideo;
  faCalendar = faCalendar;
  faUser=faUser;
  faCog=faCog;
  faSignOutAlt=faSignOutAlt;
}
