import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registerdata = {uid:'',username:'',password:'',email:''};
  constructor(private authService: AuthService,private router: Router){ }

  onRegister(){
    console.log(this.registerdata)
    this.authService.register(this.registerdata).subscribe(
      response =>{alert(response);},
      error => {alert('User already exists');}
    );
  }
}

