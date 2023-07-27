import { Component } from '@angular/core';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterKeys:string[]=[];
  filterValues:Record<string, string[]> = {};
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses: any) => {
      Object.keys(courses[0]).forEach(element => {
        if(element!="course_id" && element!="course_description"){
          this.filterKeys.push(element);
          this.filterValues[element] = [];
        }
      });
      courses.forEach((course: any) => {
        Object.keys(course).forEach(element => {
          if(this.filterKeys.includes(element) && !this.filterValues[element].includes(course[element])){
            this.filterValues[element].push(course[element]);
          }
        });
      });
    });
  }


}
