import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  departments;
  constructor(private _dep:DepartmentService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._dep.departments().subscribe(
      (data:any)=>{
        this.departments=data;
      },
      (error)=>{
        this._snack.open("Error In Loading Departments From Server",'',{
          duration:3000,
        })
      }
    )
  }

}
