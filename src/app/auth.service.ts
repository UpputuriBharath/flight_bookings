import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl ='http://127.0.0.1:5000';
   link=new BehaviorSubject(false)
  
  constructor(private http: HttpClient) { }

  login(user:any):Observable<any>{
    // console.log(this.baseUrl,"***",user)
    return this.http.post(`${this.baseUrl}/login`,user);
  }
  user(data:boolean){
    this.link.next(data);
  }

  register(user:any):Observable<any>{
    // console.log("bwdvbdwi")
    return this.http.post(`${this.baseUrl}/register`,user)
  }


  logOut(){
    this.link.next(false);
  }
}
