import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {faStar,faStarHalf} from '@fortawesome/free-solid-svg-icons'
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
  faStarHalf=faStarHalf;
  id:number=0;
  constructor(private route:ActivatedRoute,private coursesService:CoursesService,private router:Router) { }
  course?:ICourse;
  review:string='';
  reviews:string[]=['It is a nice course','Really interesting','I like it'];

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.id=Number(this.route.snapshot.paramMap.get('id'))
      this.coursesService.getCourses().subscribe((courses:any)=>{
        this.course=courses.filter((course:ICourse)=>course.course_id==this.id)[0]
      })
    }
  }
  addReview(){
    this.reviews.push(this.review);
  }
}
