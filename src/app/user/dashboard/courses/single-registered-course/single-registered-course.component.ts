import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-single-registered-course',
  templateUrl: './single-registered-course.component.html',
  styleUrls: ['./single-registered-course.component.scss']
})
export class SingleRegisteredCourseComponent {
  selected = 0;
  hovered = 0;
  faStar = faStar;
}
