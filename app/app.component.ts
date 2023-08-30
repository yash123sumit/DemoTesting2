import { Component } from '@angular/core';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  city = 'Banglore';

  getCityName(){
  this.city = 'Kurnool';
  }
  allUsers : any[] = [];
  constructor (private users : DemoServiceService){
    this.allUsers = users.getAllUsers();
  }
}
