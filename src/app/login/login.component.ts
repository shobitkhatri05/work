import { Component, OnInit } from '@angular/core';
import { carService } from '../car.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  constructor(private us: carService) { }

  ngOnInit() {
  }

  addData(){
    this.us.addData(this.name, this.password);
    // console.log(this.name)
  }
}
