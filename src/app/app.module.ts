import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './Student/student-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { departmentcomp } from './Department/department.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    departmentcomp
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
