import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl ='http://127.0.0.1:5000';

  
  constructor(private http: HttpClient) { }

  searchflights(data:any):Observable<any>{
    let baseUrl1=this.baseUrl+'/search-flights'
return this.http.post(baseUrl1,data)
  }

  bookflights(data1:any):Observable<any>{
    let baseUrl2=this.baseUrl+'/book-flights';
    return this.http.post(baseUrl2,data1)
  }

  displaydata():Observable<any>{
    // console.log(data);
    return this.http.get(`${this.baseUrl}/bookings`)
  }

  deleteflights(bid:number):Observable<any>{
    console.log(bid)
    return this.http.delete(`${this.baseUrl}/booking/${bid}`)
  }
}
