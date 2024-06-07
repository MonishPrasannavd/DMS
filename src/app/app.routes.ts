import { Routes } from '@angular/router';
import { LoginComponent } from './auth-pages/login/login.component';
import { OtpPageComponent } from './auth-pages/otp-page/otp-page.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ComputerpageComponent } from './home/computerpage/computerpage.component';

export const routes: Routes = [
    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path:'login',component:LoginComponent, title:'Login'},
    {path:'otp',component:OtpPageComponent},
    {path:'home',component:HomepageComponent, title:'Home'},
    {path:'computer', component:ComputerpageComponent}
];
