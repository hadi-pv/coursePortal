import { Injectable } from '@angular/core';
import { ICourse } from '../courses.model';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courseUrl='assets/data/courses.json';
  constructor(private http: HttpClient) { }

  

  getCourses():Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this.courseUrl).pipe(
      tap(data => 
        JSON.stringify(data)
        ),
        catchError(this.handleError)
    )
  }


  private handleError(err:HttpErrorResponse) {
    let errormsg=''
    if(err.error instanceof ErrorEvent){
        errormsg=`An error occured : ${err.error.message}`
    }else{
        errormsg=`Server code : ${err.status}, error message: ${err.message}`
    }
    console.log(errormsg);
    return throwError(()=>{
        errormsg
    })
  }

}
