import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    AdminComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
