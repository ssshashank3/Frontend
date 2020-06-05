import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { InstituteSignInComponent } from './institute-sign-in/institute-sign-in.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'adminLogin',component:SignInComponent},
  {path:'login/:instituteName',component:InstituteSignInComponent},
  {path:'userLogin',component:UserSignInComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout',component:LogoutComponent, canActivate :[RouteGuardService]},
  {path:'admin/createNewUser',component:CreateNewUserComponent, canActivate :[RouteGuardService]},
  {path:'admin/modifyUser',component:ModifyUserComponent, canActivate :[RouteGuardService]},
  {path:'welcome' ,component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
