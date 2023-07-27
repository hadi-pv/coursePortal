import { Component, Input, Output,EventEmitter } from '@angular/core';
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
  filter:Record<string, string[]> = {};
  @Output() filterChange: EventEmitter<Record<string, string[]>> = new EventEmitter<Record<string, string[]>>();

  filterFunc(key:string,value:string,checked:boolean){
    if(!checked){
      if(this.filter[key].includes(value)){
        this.filter[key].splice(this.filter[key].indexOf(value),1);
      }else{
        this.filter[key].push(value);
      }
    }else{
      this.filter[key].push(value);
    }
    this.filterChange.emit(this.filter);
  }

  buttonClick(){
    
  }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses: any) => {
      Object.keys(courses[0]).forEach(element => {
        if(element!="course_id" && element!="course_description"){
          this.filterKeys.push(element);
          this.filterValues[element] = [];
          this.filter[element] = [];
        }
      });
      courses.forEach((course: any) => {
        Object.keys(course).forEach(element => {
          if(this.filterKeys.includes(element) && !this.filterValues[element].includes(course[element])){
            this.filterValues[element].push(course[element]);
            this.filter[element].push(course[element]);
          }
        });
      });
    });
  }


}
