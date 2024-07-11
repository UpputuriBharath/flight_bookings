import { Component, viewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  isLogin = true;

  logindata = {username:'',password:''};
  registerdata = {uid:'',username:'',password:'',email:''};

  constructor(private authService: AuthService,private router: Router){ }

 

  onLogin(){
    console.log(this.logindata,"*****")
    let a=this.authService.login(this.logindata)
    a.subscribe(res=>{
      console.log(res,"success")
      if (res.length>0){
        console.log(res[0]['username'])
        localStorage.setItem('username',res[0]['username'])
        this.authService.user(true)
        this.router.navigate(['home'])
      }
      else
        {
          this.authService.user(false)
          alert('Invalid Credentials..')
        }
      
    },err=>{
      console.log(err,"err")
    })

  }


}
