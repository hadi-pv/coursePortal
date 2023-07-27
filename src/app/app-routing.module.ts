import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { CatalogComponent } from './user/catalog/catalog.component';
import { UserComponent } from './user/user.component';
import { LiveComponent } from './user/dashboard/live/live.component';
import { CalendarComponent } from './user/dashboard/calendar/calendar.component';
import { CoursesComponent } from './user/dashboard/courses/courses.component';
import { SingleCourseComponent } from './user/catalog/single-course/single-course.component';
import { SingleRegisteredCourseComponent } from './user/dashboard/courses/single-registered-course/single-registered-course.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: SingleCourseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/live', component: LiveComponent },
  { path: 'dashboard/calendar', component: CalendarComponent },
  { path: 'dashboard/courses', component: CoursesComponent },
  { path: 'dashboard/courses/:id', component: SingleRegisteredCourseComponent },
  { path: 'user', component: UserComponent },
  {path:'',redirectTo:'catalog',pathMatch:'full'},
  {path:'**',redirectTo:'catalog',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
