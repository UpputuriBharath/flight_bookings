import { Component } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  data:any=[];
  isform=true;


  bid:number=60;
  bookinginfo = {flightno:'',flightname:'',source:'',destination:'',bdate:'',tdate:'',time:'',type:'',fname:'',lname:'',age:'',mobileno:'',gender:''};
  constructor(private flightService:FlightService){ 
    this.bid = parseInt(localStorage.getItem('bid') || '60',10);
  }
  booking(value:any){
    let flightInfo=localStorage.getItem('bookinginfo') 
    if(flightInfo){  
      let flightdata:any=(JSON.parse(flightInfo));
      let result={...flightdata,...value} 
        this.bid=this.bid+1;
        result['bid']=this.bid;
      result['mobileno']=parseInt(result['mobileno'])
      localStorage.setItem('bid',this.bid.toString());
      this.flightService.bookflights(result).subscribe(
        res =>{ console.log(res);alert(res);},
        err=>{alert(err);},
      );
    }
 
  }
}