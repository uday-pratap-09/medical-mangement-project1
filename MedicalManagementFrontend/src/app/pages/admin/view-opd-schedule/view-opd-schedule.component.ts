import { Component, OnInit } from '@angular/core';
import { OpdService } from 'src/app/services/opd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-opd-schedule',
  templateUrl: './view-opd-schedule.component.html',
  styleUrls: ['./view-opd-schedule.component.css']
})
export class ViewOPDScheduleComponent implements OnInit {
  opdSchedule=[
    {
      sId:23,
      opdName:'Basic Java Quiz',
      consultantName:'',
      opdDays:50,
      location:30,
      opdRegistrationTimings:'',
      department:{
        oId:3,
      }
    },
    {
      qId:23,
      title:'',
      description:'',
      maxMarks:50,
      numberOfQuestions:30,
      active:'',
    },
  ]
  constructor(private _opd:OpdService) { }

  ngOnInit(): void {
    this._opd.opd().subscribe(
      (data:any)=>{
        this.opdSchedule=data;
        console.log(this.opdSchedule);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Error in Loading Data !","error");
        
      }
    );
  }
  //
  deleteOpdSchedule(sId){
    Swal.fire({
      icon:'info',
      title:"Are You Sure You Wan't to Delete OPD Schedule?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        //delete
        this._opd.deleteOpdSchedule(sId).subscribe(
          (data)=>{
            this.opdSchedule=this.opdSchedule.filter((opd)=>opd.sId!=sId);
            Swal.fire('Success','OPD Schedule Deleted Successfully','success');
          },(error)=>{
            Swal.fire('Error','Server Error','error');
          }
        );
      }
    })
  }
}
