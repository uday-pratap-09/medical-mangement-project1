import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,private https:HttpClient) { }

  public user=
  {
    username:'',
    passsword:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };
  dataset: users = {
    username:'',
    passsword:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };
  onSubmit(){
    this.https.post<users>('http://localhost:8082/getdetails',this.dataset).subscribe(
      res =>{
        this.dataset=res;
        console.log(this.dataset);
        //alert("Email Sent Successfully");
        Swal.fire("Success !!","Registration Email Successfully Sent To User","success");
        this.dataset.username='';
        this.dataset.passsword='';
        this.dataset.firstName='';
        this.dataset.lastName='';
        this.dataset.email='';
        this.dataset.phone='';
      });
  }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      //alert("User Is Required");
      this.snack.open("Username is Required !! ",'Dismiss',{duration:3000,
      verticalPosition:'top'
      });
      return;
    }
    //addUser:userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data)
       // alert("success")
       Swal.fire('Success','User Is Registered Successfully.','success');
      },
      (error)=>{
        console.log(error);
        //alert('Something Went Wrong');
        this.snack.open('Something Went Wrong!!','',{
          duration:1000,
        });
      }
    )
  }

}
interface users{
  username:string,
    passsword:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
}
