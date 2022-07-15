import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.css']
})
export class ViewDepartmentsComponent implements OnInit {
  departments=[
    {
      did:'',
      departmentName:'',
      description:'',
    }
  ];
  constructor(private _department:DepartmentService) { }

  ngOnInit(): void {
    this._department.departments().subscribe((data:any)=>{
      //css
      this.departments=data;
      console.log(this.departments);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!","Error In Loading Data","error");
    }
    )
  }
  deleteDepartment(did){
    Swal.fire({
      icon:'info',
      title:"Are You Sure You Wan't to Delete This Department?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        //delete
        this._department.deleteDepartment(did).subscribe(
          (data)=>{
            this.departments=this.departments.filter((department)=>department.did!=did);
            Swal.fire('Success','Department Deleted Successfully','success');
          },(error)=>{
            Swal.fire('Error','Server Error','error');
          }
        );
      }
    })
  }
}
