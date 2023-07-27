import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { ICourse } from 'src/app/shared/courses.model';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  constructor(private coursesService: CoursesService) { }
  courses:ICourse[] = [];
  course_levels:any[]=[];
  course_fields:any[]=[];


  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses:ICourse[]) => {
      this.courses = courses;
      this.courses.map((course:ICourse) => {
        if(!this.course_levels.includes(course.course_level)){
          this.course_levels.push(course.course_level);
        }
      });
      this.course_fields = this.courses.map((course:ICourse) => {
        if(!this.course_fields.includes(course.course_field)){
          this.course_fields.push(course.course_field);
        }
      });
    });
    }
}
