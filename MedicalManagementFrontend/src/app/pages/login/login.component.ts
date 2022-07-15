import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:'',
  }
  constructor(private snack:MatSnackBar,private login:LoginService) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log("Login Button Clicked");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open("Username Is Required !! ",'Dismiss',{
        duration:3000,
      });
      return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open("Password Is Required !! ",'Dismiss',{
        duration:3000,
      });
      return;
    }
    //request server to generate the token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);
        //login..
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect ...ADMIN:admin-dashboard
            //redirect ...NORMAL:normal-dashboard
            if(this.login.getUserRole()=="Admin"){
              //admin dashboard
              window.location.href='/admin';
            }else if(this.login.getUserRole()=='Normal'){
              //normal user dashboard
              window.location.href='/user-dashboard/0';
            }else{
              this.login.logout();
              //location.reload();
            }
          }
        );
      },
      (error)=>{
        console.log('Error !');
        console.log(error);
        this.snack.open("Invalid Details !! Try again",'',{
          duration:3000,
        })
      }
    );
  }
}
