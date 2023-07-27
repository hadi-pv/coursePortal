import { Component,OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { ICourse } from 'src/app/shared/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  constructor(private coursesService: CoursesService) { }

  courses: ICourse[] = [];

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses: ICourse[]) => {
      this.courses = courses;
    });
  }


}
