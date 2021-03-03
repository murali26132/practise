import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  username:any=localStorage.getItem("username")

  constructor() { }

  ngOnInit(): void {

  }
  onclick()
  {
    
  }

  onclick1(){}
}
