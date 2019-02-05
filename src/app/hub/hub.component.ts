import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../user-class/user'
import {UserRequestService} from '../user-http/user-request.service'


@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  providers:[UserRequestService],
  styleUrls: ['./hub.component.css']
})

export class HubComponent implements OnInit {

  user:User

  // constructor(private http:HttpClient) {
  //  }

  constructor(private userService:UserRequestService) {
    
  
  }
  ngOnInit() {
    this.userService.userRequest()
    this.user=this.userService.user
  }
    
  
}