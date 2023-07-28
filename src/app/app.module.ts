import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { CatalogComponent } from './user/catalog/catalog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { CalendarComponent } from './user/dashboard/calendar/calendar.component';
import { LiveComponent } from './user/dashboard/live/live.component';
import { CoursesComponent } from './user/dashboard/courses/courses.component';
import { FormsModule } from '@angular/forms';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SingleCourseComponent } from './user/catalog/single-course/single-course.component';
import { SingleRegisteredCourseComponent } from './user/dashboard/courses/single-registered-course/single-registered-course.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { convertToFilterPipe } from './shared/components/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    AdminComponent,
    SidenavComponent,
    DashboardComponent,
    CatalogComponent,
    SigninComponent,
    FilterComponent,
    CalendarComponent,
    LiveComponent,
    CoursesComponent,
    SingleCourseComponent,
    SingleRegisteredCourseComponent,
    ErrorComponent,
    HomeComponent,
    convertToFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
