import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {User} from './user';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of,BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {

   baseURL: string="http://localhost:8080/RESTAPI/rest/";
   private currentUser: User;

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private router: Router) { 
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

get(url: string, model: string){
  this.http
      .get(this.baseURL+ url, this.httpOptions)
      .subscribe(
        data =>
        { 
          console.log('success', data)
        },
        error => 
        {
          if(error.status==401 )
          {
           this.router.navigate(["/login"])
          } 
        }
      );
}  

post(url: string, model: string){
  
  this.http
      .post(this.baseURL+ url, model, this.httpOptions)
      .subscribe(
        data =>
        { 
          localStorage.setItem('currentUser', JSON.stringify(data));
        },
        error => 
        {
          if(error.status==401 )
          {
             this.router.navigate(["/login"])
          } 
        }
      );
}
  
}