import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: User=new User()

  constructor(private httpService:HttpService) { }

  ngOnInit() {
  }

goForLogin(){

		var u={
   	"user": this.user
   }
  this.httpService.post("portfolio/login", JSON.stringify(u))
}
 


}
