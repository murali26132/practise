import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitComponent } from './submit/submit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainComponent } from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';





@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    AddemployeeComponent,
    LoginpageComponent,
    MainComponent,

   
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,ReactiveFormsModule,MatSidenavModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
