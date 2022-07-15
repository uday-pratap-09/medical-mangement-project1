import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentService } from 'src/app/services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  department={
    departmentName:'',
    description:'',
  };
  constructor(private _department:DepartmentService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.department.departmentName
      .trim()=='' || this.department.departmentName==null){
        this._snack.open("Department Required !!",'',{
          duration:3000
      });
      return;
  }
  //done
  this._department.addDepartment(this.department).subscribe(
    (data:any)=>{
      this.department.departmentName='';
      this.department.description='';
      Swal.fire("Success !!",'Department Is Added Successfully','success');
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!",'Server Error','error');
    }
  )
}
}
