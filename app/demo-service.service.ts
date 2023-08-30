import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }

  getAllUsers(){
    return[
      {name : 'Kumar', age : 20, email : 'k@20.com'},
      {name : 'Rajesh', age : 24, email : 'r@24.com'},
      {name : 'Mithun', age : 18, email : 'm@18.com'},
      {name : 'Viraj', age : 25, email : 'v@25.com'}
    ]
  }
}
