import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  repeatPass: string = 'none';
  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    UserId: new FormControl("",[Validators.required, Validators.email]),
    pwd: new FormControl("",[Validators.required,Validators.minLength(6), Validators.maxLength(15)])
  });

  registerSubmitted(){
  }

  get userId() : FormControl{
    return this.registerForm.get("UserId") as FormControl;
  }
 
  get Pwd() : FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
 
}
