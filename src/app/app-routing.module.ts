import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  {path :'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'search',component:FlightComponent},
  {path:'register',component:RegistrationComponent},
  {path:'book',component:BookingComponent},
  {path:'display',component:CrudComponent},
  {path:'booking/bid',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
