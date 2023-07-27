import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../shared/services/courses.service';
import { ICourse } from 'src/app/shared/courses.model';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent {
  active=1;
  images = ['../../../../assets/linkedin_banner_image_1.png','../../../../assets/image-removebg-preview.png','../../../../assets/linkedin_banner_image_1.png'];
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
