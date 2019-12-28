import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { MessageService } from '../message.service';
import { HttpService } from '../http.service';

import {catchError, retry} from 'rxjs/internal/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

//   localUrl: string="http://localhost:8080/RESTAPI/rest/portfolio/aapl";
   localUrl: string="http://localhost:8080/RESTAPI/rest/portfolio/registration";
 
   user: User = new User()
   

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private messageService: MessageService, private httpService:HttpService) { }

  ngOnInit() {
  	
  }
 

  getSmartphone() {
 // return this.http.get(this.localUrl, this.httpOptions)
//  return this.http.get("http://localhost:8080/RESTAPI/rest/portfolio/getallUser");

this.http.get(this.localUrl, { responseType: 'text', observe: 'response' }).subscribe(
(data)=>{
const myURL_body = data['_body'];
}
)

}

getHero(){
this.http.get(this.localUrl).subscribe( response => {

 }, (err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 404) {
             
        }
}
)}

getUser(){
	this.http
      .get(this.localUrl)
      .subscribe(
        data =>
        { 
        	console.log('success', data)
        },
        error => 
        {
        	if(error.status==401 )
        	{
        	console.log('oops', error)
            } 
        }
      );
}

register(){
   var u={
   	"user": this.user
   }

	this.http
      .post(this.localUrl, JSON.stringify(u), this.httpOptions)
      .subscribe(
        data =>
        { 
        	console.log('success', data)
        },
        error => 
        {
        	if(error.status==401 )
        	{
        	console.log('oops', error)
            } 
        }
      );
}

goForRegistration(){
	var u={
   	"user": this.user
   }
  this.httpService.post("portfolio/registration", JSON.stringify(u))
}

getUserList(){
  localStorage
  var u={
    "user": this.user
   }
  this.httpService.get("portfolio/aapl", JSON.stringify(u))
}

}


