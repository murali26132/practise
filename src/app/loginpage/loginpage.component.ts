import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username:any;
  password:any;
  submitted:any

  // constructor(private toaster: ToastrService) { }
  loginForm: FormGroup;
  constructor(private router: Router,private toaster: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  onSubmit(){
     localStorage.setItem('username',this.username);
    // this.loginError.message = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.username=="phani@gmail.com" && this.password=="test" || this.username=="venket@gmail.com" && this.password=="test" ||this.username=="vasanthi@gmail.com" && this.password=="test"){
      this.router.navigate(['/main']); 
    }
     else{
      this.toaster.error("Invalid ID or password entered.", "Login")
    //   this.router.navigate(['/main']);
     }
   
    }
  
  
 



}
