import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
//  import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})



export class AddemployeeComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  displayedColumns: string[] = ['firstname', 'emailid', 'phoneno', 'designation', 'action'];
  array: any = [];
  // res:any;
  dataSource: any = []
  show1 = false;
  show = false;
  date: any;
  joingdate: any;
  searchkeyword: any;
  firstname: any;
  lastname: any;
  marrieddate: any;
  emailid: any;
  phoneno: any;
  departments: any;
  desgnation: any;
  emergencycontactname: any;
  emergencycontactnumber: any;
  show2 = true;
  action: any;
  dialog: any;
  dialogRef: any;
  show3 = true;
  show4 = false;



  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.array)

  }



  save() {

    if (this.firstname == "" || this.firstname == null) {
      this.toaster.warning("Fill the firstname");
      return;

    }
    if(this.lastname == "" || this.lastname == null) {
      this.toaster.warning("Fill the lastname");
      return;
    }   
    if (this.date == "" || this.date == null) {
      this.toaster.warning("Fill the date");
      return;

    }
    if(this.marrieddate == "" || this.marrieddate == null) {
      this.toaster.warning("Fill the marrieddate");
      return;
    } 
    if (this.emailid == "" || this.emailid == null) {
      this.toaster.warning("Fill the emailid");
      return;

    }
    if (this.phoneno == "" || this.phoneno == null) {
      this.toaster.warning("Fill the phoneno");
      return;

    }
    if(this.emergencycontactname == "" || this.emergencycontactname == null) {
      this.toaster.warning("Fill the emergencycontactname");
      return;
    } 
    if (this.emergencycontactnumber == "" || this.emergencycontactnumber == null) {
      this.toaster.warning("Fill the emergencycontactnumber");
      return;

    }
    if(this.joingdate == "" || this.joingdate == null) {
      this.toaster.warning("Fill the joingdate");
      return;
    } 

    if(this.desgnation == "" || this.desgnation == null) {
      this.toaster.warning("Fill the desgnation");
      return;
    }
    if(this.departments == "" || this.departments == null) {
      this.toaster.warning("Fill the departments");
      return;
    } 
    this.show = false;
    this.show1 = true;
    this.show2 = true;
    // const arr =[{
    //   firstname:this.firstname,
    //   emailid:this.emailid,
    //   phoneno:this.phoneno,
    //   date:this.date,
    //   joingdate:this.joingdate,    
    //   lastname: this.lastname,
    //   marrieddate:this.marrieddate,
    //   departments: this.departments,
    //   desgnation: this.desgnation,
    //   emergencycontactname: this.emergencycontactname,
    //   emergencycontactnumber: this.emergencycontactnumber


    // }];
    //  this.array.push(arr)
    // this.dataSource = new MatTableDataSource(arr)
    this.array.push({
      firstname: this.firstname,
      emailid: this.emailid,
      phoneno: this.phoneno,
      date: this.date,
      joingdate: this.joingdate,
      lastname: this.lastname,
      marrieddate: this.marrieddate,
      departments: this.departments,
      desgnation: this.desgnation,
      emergencycontactname: this.emergencycontactname,
      emergencycontactnumber: this.emergencycontactnumber
    })
    this.dataSource = new MatTableDataSource(this.array)
  }
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onclick() {

  }
  // add(){
  //   this.dataSource.filteredData.push({
  //     firstname:this.firstname,
  //     emailid:this.emailid,
  //     phoneno:this.phoneno,
  //     designation:this.desgnation
  //   })
  //   //  this.dataSource.filteredData="";
  // }
  add() {
    this.show = true;
    this.show2 = false;
    this.show3 = true;
    this.show4 = true;
    this.show = true;
    this.show2 = false;
    this.show3 = true;
    this.show4 = false;
    this.firstname = '';
    this.lastname = '';
    this.emailid = '';
    this.marrieddate = '';
    this.phoneno = '';
    this.departments = '';
    this.desgnation = '';
    this.joingdate = '';
    this.date = '';
    this.emergencycontactname = '';
    this.emergencycontactnumber = '';

  }


  funAllowOnlyNumber(event: any) {
    var key;
    document.all ? (key = event.keyCode) : (key = event.which);
    return (
      (key >= 48 && key <= 57) ||
      key == 44 ||
      key == 43 ||
      key == 45 ||
      key == 32
    );
  }
  // index:any;
  idx: any;
  openDialog(item: any, i: any) {
      this.firstname = item.firstname,
      this.emailid = item.emailid,
      this.phoneno = item.phoneno,
      this.date = item.date,
      this.joingdate = item.joingdate,
      this.lastname = item.lastname,
      this.marrieddate = item.marrieddate,
      this.departments = item.departments,
      this.desgnation = item.desgnation,
      this.emergencycontactname = item.emergencycontactname,
      this.emergencycontactnumber = item.emergencycontactnumber
    this.idx = i
    this.show = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = true;
    // this.element.firstname = response[0]['firstname'];


    //   this.firstname='';
    // this.lastname='';
    // this.emailid='';
    // this.marrieddate='';
    // this.phoneno='';
    // this.departments='';
    // this.desgnation='';
    // this.joingdate='';
    // this.emergencycontactname='';
    // this.emergencycontactnumber='';
    // this.date='';
    const dialogRef = this.dialog.open({
      width: '250px',



    });


  }
  cancel() {
    this.firstname = '';
    this.lastname = '';
    this.emailid = '';
    this.marrieddate = '';
    this.phoneno = '';
    this.departments = '';
    this.desgnation = '';
    // this.joingdate='';
    this.emergencycontactname = '';
    this.emergencycontactnumber = '';
    this.date = '';
  }

  delarr: any = []

  delete(i: any) {
    this.dataSource.filteredData.splice(i, 1);
    this.delarr = this.dataSource.filteredData;
    this.dataSource = new MatTableDataSource(this.delarr);
  }

  emparray:any = []
  update() {
    this.emparray={
      firstname: this.firstname,
      emailid: this.emailid,
      phoneno: this.phoneno,
      date: this.date,
      joingdate: this.joingdate,
      lastname: this.lastname,
      marrieddate: this.marrieddate,
      departments: this.departments,
      desgnation: this.desgnation,
      emergencycontactname: this.emergencycontactname,
      emergencycontactnumber: this.emergencycontactnumber
    }
    this.show2 = true;
    this.show = false;
    this.dataSource.filteredData[this.idx] = this.emparray;

    this.toaster.success("Update Successfully");

  }


  // geterrorMessage() {
  //   return this.email.hasError('email')? 'you must enter the value':this.email.hasError('email') ? 'not a valid email': '';
  // }

  back() {
    this.show = false;
    this.show2 = true;
  }


}
