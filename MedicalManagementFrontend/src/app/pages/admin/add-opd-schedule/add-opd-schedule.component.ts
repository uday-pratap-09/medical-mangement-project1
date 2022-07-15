import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentService } from 'src/app/services/department.service';
import { OpdService } from 'src/app/services/opd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-opd-schedule',
  templateUrl: './add-opd-schedule.component.html',
  styleUrls: ['./add-opd-schedule.component.css']
})
export class AddOpdScheduleComponent implements OnInit {
  departments=[]
  departmentData={
    opdName:'',
    consultantName:'',
    opdDays:'',
    location:'',
    opdRegistrationTimings:'',
    active:'true',
    department:{
      did:'',
    },
  };
  constructor(private _dep:DepartmentService,private _snack:MatSnackBar,private _opd:OpdService) { }

  ngOnInit(): void {
    this._dep.departments().subscribe
      ((data:any)=>{
        //departments loaded successfully
        this.departments=data;
        console.log(this.departments);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Error In Loading Data From Server','error')
      }
      );
  }
  //
  addOpdSchedule(){
    if(this.departmentData.opdName.trim()=='' || this.departmentData.opdName==null){
      this._snack.open('OPD Name Required !!','Dismiss',{
        duration:3000,
      });
      return;
    }
    //validation
    //call server
    this._opd.addOpdSchedule(this.departmentData).subscribe(
      (data)=>{
        Swal.fire('Success','OPD Schedule Added Successfully','success');
        this.departmentData={
          opdName:'',
          consultantName:'',
          opdDays:'',
          location:'',
          opdRegistrationTimings:'',
          active:'true',
          department:{
            did:'',
          },
        };
      },
      (error)=>{
        Swal.fire('Error !!',"Unable To Connect To The Server",'success');
        console.log(error);
      });
  }
  }

