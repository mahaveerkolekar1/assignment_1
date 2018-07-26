import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './post.service';
import {NgModel, FormsModule } from '@angular/forms';
import { DashboardcomponentComponent } from './component/dashboardcomponent/dashboardcomponent.component';
import { CommunicatorService } from './communication-service';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'details', component: EmployeeComponent },
  { path: 'dashboard', component: DashboardcomponentComponent }
];

@NgModule({
  declarations: [AppComponent, EmployeeComponent, LoginComponent, DashboardcomponentComponent],
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [PostService, CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
