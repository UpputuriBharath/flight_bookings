import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
data:any;
ngOnInit(): void {
  this.display();
}
  constructor(private http: HttpClient, private flightService:FlightService,private activeRoute:ActivatedRoute){ }
  display(){
    
    this.flightService.displaydata().subscribe(
      (res)=>{res
        this.data=res;
      },
      err=>{err}
    )
  }


    deletebooking(bid:number,data:any){
      console.log(data['bid'])
      this.flightService.deleteflights(data['bid']).subscribe(
        (res)=>{console.log(res),
          this.display()
        },
      (err)=>{console.log(err)}
      );
   }
    
}

