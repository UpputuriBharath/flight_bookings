import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
  url="../public/flight.jpg"
  username:any='';
  hideBookingsLink:any;
  constructor(private authService: AuthService,private router:Router){ }
   ngOnInit():void{
    this.authService.link.subscribe(res=>{
      this.username=localStorage.getItem('username');
      console.log(this.username)
      console.log("auth link",res)
      this.hideBookingsLink=res;
    })
    // const user = this.authService.getUser();
    // if (user){
    //   this.username=localStorage.getItem('username');
    // }
   }

   onyourbookings(){
    this.router.navigate(['/display'])
  
   }

   onLogin(){
    this.router.navigate(['/login'])
   }

   onHome(){
    this.router.navigate(['/home'])
   }

   onSearch(){
    this.router.navigate(['/search'])
   }

   onLogout(){
    this.authService.logOut();
    localStorage.clear();
    this.router.navigate(['/home'])
   }


}
