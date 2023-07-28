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
  course_fields:any[]=[];
  private _searchVal:string = '';
  searchedCourses:ICourse[] = [];

  get searchVal():string{
    return this._searchVal;
  }
  set searchVal(value:string){
    this._searchVal=value;
    this.searchedCourses=this.Searching(value)
  } 


  filterChange(value:Record<string, string[]>){
    this.searchedCourses=this.courses;
    Object.keys(value).forEach((key:string)=>{
      if(value[key].length>0){
        this.searchedCourses=this.searchedCourses.filter((course:ICourse)=>
        value[key].includes(course[key]))
      }
    });
  }



  Searching(searchBy:string):ICourse[]{
    searchBy=searchBy.toLocaleLowerCase()
    return this.courses.filter((course:ICourse)=>
    course.course_name.toLocaleLowerCase().includes(searchBy))
  }


  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses:ICourse[]) => {
      this.courses = courses;
      this.searchedCourses = courses;
      this.courses.map((course:ICourse) => {
        if(!this.course_fields.includes(course.course_field)){
          this.course_fields.push(course.course_field);
        }
      });

    });
    }
}
