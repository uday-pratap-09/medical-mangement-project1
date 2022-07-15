import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './pages/admin/add-department/add-department.component';
import { AddOpdScheduleComponent } from './pages/admin/add-opd-schedule/add-opd-schedule.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { UpdateDepartmentComponent } from './pages/admin/update-department/update-department.component';
import { UpdateOpdScheduleComponent } from './pages/admin/update-opd-schedule/update-opd-schedule.component';
import { ViewDepartmentsComponent } from './pages/admin/view-departments/view-departments.component';
import { ViewDoctorsComponent } from './pages/admin/view-doctors/view-doctors.component';
import { ViewOPDScheduleComponent } from './pages/admin/view-opd-schedule/view-opd-schedule.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppointmentComponent } from './pages/user/appointment/appointment.component';
import { LoadOpdScheduleComponent } from './pages/user/load-opd-schedule/load-opd-schedule.component';
import { ShowappointmentComponent } from './pages/user/showappointment/showappointment.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:':opdId',
        component:LoadOpdScheduleComponent,
      }
    ]
  },
  {
    path:'appointmentBooking/:oid',
    component:AppointmentComponent,
  },
  {
    
      path:'showAppointment',
      component:ShowappointmentComponent,
    
  },

  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:"departments",
        component:ViewDepartmentsComponent
      },
      {
        path:"add-department",
        component:AddDepartmentComponent
      },
      {
        path:'departments/:did',
        component:UpdateDepartmentComponent
      },
      {
        path:'opdSchedule',
        component:ViewOPDScheduleComponent
      },
      {
        path:'add-opdSchedule',
        component:AddOpdScheduleComponent,
      },
      {
        path:'opdSchedule/:oid',
        component:UpdateOpdScheduleComponent
      },
      {
        path:'view-doctors/:sId/:opdName',
        component:ViewDoctorsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
