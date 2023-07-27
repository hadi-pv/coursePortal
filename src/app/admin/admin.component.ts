import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
import { ICourse } from '../shared/courses.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  courses:ICourse[] = [];
  keys=["course_id",
    "course_name",
    "course_instructor",
    "course_description",
    "course_rating",
    "course_level",
    "course_duration",
    "course_price",
    "course_field",]
  constructor(private coursesService: CoursesService,private modalService: NgbModal) { }
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses: ICourse[]) => {
      this.courses = courses;
    });
  }
}
