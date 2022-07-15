import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  constructor(private _dep:DepartmentService,private _router:Router,private _route:ActivatedRoute) { }
  did=0;
  dept;
  department;
  ngOnInit(): void {
    this.did=this._route.snapshot.params['did'];
    //alert(this.sId);
    this._dep.getDepartment(this.did).subscribe(
      (data:any)=>{
        this.dept=data;
        console.log(this.dept);
      },
      (error)=>{
        console.log(error);
      }
    );
    this._dep.departments().subscribe((data:any)=>{
      this.department=data;
    },error=>{
      alert("Error In Loading Data");
    });
  }
  public updateData(){
    //validate
    this._dep.updateDepartment(this.dept).subscribe((data)=>{
      Swal.fire("Success","OPD Schedule Updated Successfully !!",'success').then((e)=>{
        this._router.navigate(['/admin/departments']);
      });
    },(error)=>{
      Swal.fire('Error','Error In Updating OPD Schedule','error');
      console.log(error);
    });
  }
}
