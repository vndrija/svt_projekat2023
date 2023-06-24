import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoute)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
