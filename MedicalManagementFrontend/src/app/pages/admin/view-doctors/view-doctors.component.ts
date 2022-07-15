import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  sId;
  opdName;
  doctors=[];
  constructor(private _route:ActivatedRoute,private _doctor:DoctorsService) { }
  ngOnInit(): void {
    this.sId=this._route.snapshot.params['sId'];
    this.opdName=this._route.snapshot.params['opdName'];
    this._doctor.getDoctorsOfOpd(this.sId).subscribe((data:any)=>{
      console.log(data);
      this.doctors=data;
    },(error)=>{
      console.log(error);

    }
    )
    
  }
}
