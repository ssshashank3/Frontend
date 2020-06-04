import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';
import { LogoutComponent } from './logout/logout.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    SignInComponent,
    HeaderComponent,
    SidebarComponent,
    RegisterComponent,
    WelcomeComponent,
    LogoutComponent,
    UserSignInComponent,
    CreateNewUserComponent,
    ModifyUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : HttpInterceptorBasicAuthService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
