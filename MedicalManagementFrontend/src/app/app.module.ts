import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewDepartmentsComponent } from './pages/admin/view-departments/view-departments.component';
import { AddDepartmentComponent } from './pages/admin/add-department/add-department.component';
import { ViewOPDScheduleComponent } from './pages/admin/view-opd-schedule/view-opd-schedule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddOpdScheduleComponent } from './pages/admin/add-opd-schedule/add-opd-schedule.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateOpdScheduleComponent } from './pages/admin/update-opd-schedule/update-opd-schedule.component';
import { ViewDoctorsComponent } from './pages/admin/view-doctors/view-doctors.component';
import { UpdateDepartmentComponent } from './pages/admin/update-department/update-department.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadOpdScheduleComponent } from './pages/user/load-opd-schedule/load-opd-schedule.component';
import {MatTableModule} from '@angular/material/table';
import { AppointmentComponent } from './pages/user/appointment/appointment.component';
import { ShowappointmentComponent } from './pages/user/showappointment/showappointment.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    SidebarComponent,
    UserDashboardComponent,
    WelcomeComponent,
    ViewDepartmentsComponent,
    AddDepartmentComponent,
    ViewOPDScheduleComponent,
    AddOpdScheduleComponent,
    UpdateOpdScheduleComponent,
    ViewDoctorsComponent,
    UpdateDepartmentComponent,
    UserSidebar,
    LoadOpdScheduleComponent,
    AppointmentComponent,
    ShowappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
