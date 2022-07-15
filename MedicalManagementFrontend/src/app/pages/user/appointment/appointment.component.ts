import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DepartmentService } from 'src/app/services/department.service';
import { LoadopdscheduleService } from 'src/app/services/loadopdschedule.service';
import { OpdService } from 'src/app/services/opd.service';
import Swal from 'sweetalert2';
import { LoadOpdScheduleComponent } from '../load-opd-schedule/load-opd-schedule.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments=[]
  appointmentData={
    opdName:'',
    consultantName:'',
    location:'',
    patientName:'',
    patientGender:'',
    patientAge:'',
    patientMobileNumber:'',
    patientAddress:'',
    appointmentDate:'',
    appointmentTime:'',
    patientDisease:'',
  };
  constructor(private _loadopd:LoadopdscheduleService,private _router:Router,private _route:ActivatedRoute,private _opd:OpdService,private _dep:DepartmentService,private _snack:MatSnackBar,private _app:AppointmentService) { }
  sId=0;
  opd;
  departments;
  ngOnInit(): void {
    this.sId=this._route.snapshot.params['oid'];
    this._opd.getOpdSchedule(this.sId).subscribe(
      (data:any)=>{
        this.opd=data;
        console.log(this.opd);
      },
      (error)=>{
        console.log(error);
      }
    );
    this._dep.departments().subscribe((data:any)=>{
      this.departments=data;
    },error=>{
      alert("Error In Loading Data");
    });
  }
  bookAppointment(){
    // if(this.appointmentData.opdName.trim()=='' || this.appointmentData.opdName==null){
    //   this._snack.open('OPD Name Required !!','Dismiss',{
    //     duration:3000,
    //   });
    //   return;
    // }
    //validation
    //call server
    this._app.bookAppointment(this.appointmentData).subscribe(
      (data)=>{
        Swal.fire('Success','Appointment Booked Successfully','success');
        this.appointmentData={
          opdName:'',
    consultantName:'',
    location:'',
    patientName:'',
    patientGender:'',
    patientAge:'',
    patientMobileNumber:'',
    patientAddress:'',
    appointmentDate:'',
    appointmentTime:'',
    patientDisease:'',
        };
      },
      (error)=>{
        Swal.fire('Error !!',"Unable To Connect To The Server",'error');
        console.log(error);
      });
  }
}
