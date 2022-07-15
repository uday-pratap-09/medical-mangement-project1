import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { OpdService } from 'src/app/services/opd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-opd-schedule',
  templateUrl: './update-opd-schedule.component.html',
  styleUrls: ['./update-opd-schedule.component.css']
})
export class UpdateOpdScheduleComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _opd:OpdService,private _dep:DepartmentService,private _router:Router) { }
  sId=0;
  opd;
  departments;
  ngOnInit(): void {
    this.sId=this._route.snapshot.params['oid'];
    //alert(this.sId);
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
//update button
public updateData(){
  //validate
  this._opd.updateOPD(this.opd).subscribe((data)=>{
    Swal.fire("Success","OPD Schedule Updated Successfully !!",'success').then((e)=>{
      this._router.navigate(['/admin/opdSchedule']);
    });
  },(error)=>{
    Swal.fire('Error','Error In Updating OPD Schedule','error');
    console.log(error);
  });
}
}
