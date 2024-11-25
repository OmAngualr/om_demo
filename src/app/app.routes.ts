import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "nav", component: NavBarComponent},
    { path : "login", component : LoginComponent},
    { path: "register" , component: SignUpComponent},
    { path: "", redirectTo: "home", pathMatch: "full" }, 
    { path: "**", redirectTo: "home", pathMatch: "full" }
]
