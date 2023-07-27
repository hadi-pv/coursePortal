import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../../shared/services/courses.service';
import { ICourse } from 'src/app/shared/courses.model';

@Component({
  selector: 'app-single-registered-course',
  templateUrl: './single-registered-course.component.html',
  styleUrls: ['./single-registered-course.component.scss']
})
export class SingleRegisteredCourseComponent {
  selected = 0;
  hovered = 0;
  faStar = faStar;
  id:number=0;
  constructor(private route:ActivatedRoute,private coursesService:CoursesService,private router:Router) { }
  course?:ICourse;

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.id=Number(this.route.snapshot.paramMap.get('id'))
      this.coursesService.getCourses().subscribe((courses:any)=>{
        this.course=courses.filter((course:ICourse)=>course.course_id==this.id)[0]
      })
    }
  }
}
