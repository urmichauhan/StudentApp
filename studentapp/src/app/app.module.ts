import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentregistrationComponent } from './pages/studentregistration/studentregistration.component';
import { StudentdetailsComponent } from './pages/studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { StudentserviceService } from './services/studentservice.service'

@NgModule({
  declarations: [
    AppComponent,
    StudentregistrationComponent,
    StudentdetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [StudentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
