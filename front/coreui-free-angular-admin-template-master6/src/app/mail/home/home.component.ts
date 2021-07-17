import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  constructor() 
  {

  }

  ngOnInit(): void {
  }
  btnClick()
  {
    console.log("Button Click");
    this.snack.open("Hello welcome to this app","cancel")
    
  }

}
