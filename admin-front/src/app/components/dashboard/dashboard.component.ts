import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Http} from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  user: any;

  constructor(private authService: AuthService, private http:Http) { }

  ngOnInit(): void {
    this.getData();
    this.getUserData();
  }

  getUserData(){
    this.authService.getUserData().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  getData(){
    this.authService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
