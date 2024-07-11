import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {


  flightdata ={source:'',destination:'',tdate:'',type:''}
  result:any=[];

  constructor(private flightService:FlightService,private router:Router) {}

  Onsearch(){
    console.log(this.flightdata)
    this.flightService.searchflights(this.flightdata).subscribe(
      res=>{console.log(res,"res");
        this.result=res;
        console.log(this.result,"***")
       },
      err=>{console.log(err,"err")}
    )
    
  }

bid:number=3;
bookinginfo = {flightno:'',flightname:'',source:'',destination:'',bdate:'',tdate:'',time:'',type:''}
// cost={'Economy Class':7850,'Business Class':9250,'Elite Class':11780}
  book(value:any){
    // this.bid=this.bid+1
    // // console.log(value)
    // value['age']=23
    // value['fname']='Mouni'
    // value['lname']='Upputuri'
    // value['gender']='Female'
    // value['bid']=this.bid
    // console.log(value)
    // this.flightService.bookflights(value).subscribe(
    //   res =>{alert(res);},
    //   err=>{alert(err);},
    // );

    localStorage.setItem('bookinginfo',JSON.stringify(value));
    this.router.navigate(['/book']);
    
  }
}
