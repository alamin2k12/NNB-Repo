import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

heroes: Hero[];
empList: Array<Hero> = [];

h: Hero;
  constructor() { }

  ngOnInit() {

     let i: number = 2;

		while (i < 400) {
			
		    this.empList.push(this.h);
		    i++;
		}
  }

}
