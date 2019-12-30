import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenicate : boolean=false;
  constructor() { }

  ngOnInit() {
  	if(localStorage.getItem('currentUser') !=null)
  	{
  		this.isAuthenicate=true;
  	}
  }

}
