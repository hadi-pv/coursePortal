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
import { AuthGuard } from './shared/auth.guard';
import { AdminGuard } from './shared/admin.guard';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: SingleCourseComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'dashboard/live', component: LiveComponent,canActivate:[AuthGuard] },
  { path: 'dashboard/calendar', component: CalendarComponent ,canActivate:[AuthGuard]},
  { path: 'dashboard/courses', component: CoursesComponent,canActivate:[AuthGuard] },
  { path: 'dashboard/courses/:id', component: SingleRegisteredCourseComponent,canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent ,canActivate:[AuthGuard]},
  { path: 'error', component: ErrorComponent},
  { path: 'admin', component: AdminComponent, canActivate:[AdminGuard]},
  {path:'',redirectTo:'catalog',pathMatch:'full'},
  {path:'**',redirectTo:'error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
