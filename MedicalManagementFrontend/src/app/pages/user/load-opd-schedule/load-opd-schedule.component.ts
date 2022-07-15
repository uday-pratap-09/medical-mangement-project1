import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpdService } from 'src/app/services/opd.service';

@Component({
  selector: 'app-load-opd-schedule',
  templateUrl: './load-opd-schedule.component.html',
  styleUrls: ['./load-opd-schedule.component.css']
})
export class LoadOpdScheduleComponent implements OnInit {
  opdId;
  opd;
  opdSchedule=[
  ];
  constructor(private _route:ActivatedRoute,private _opd:OpdService) { }

  ngOnInit(): void {
    this.opdId=this._route.snapshot.params['opdId'];
    console.log(this.opdId);
    if(this.opdId==0){
      console.log("Load All Opd Schedule");
      this._opd.opd().subscribe(
        (data:any)=>{
          this.opdSchedule=data;
          console.log(this.opdSchedule);
        },(error)=>{
          console.log(error);
          alert("Error In Loading All OPD Schedule");
        }
      )
    }else{
      console.log("Load Specific OPD Schedule");
    }
  }

}
