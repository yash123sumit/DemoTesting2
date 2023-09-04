import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    FirstName: new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    LastName: new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    Email: new FormControl("",[Validators.required, Validators.email]),
    Mobile: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    Gender: new FormControl("",[Validators.required]),
    Address: new FormControl("",[Validators.required, Validators.minLength(15)]),
    Age: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"), Validators.min(18), Validators.max(100)]),
    Zip: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
    pwd: new FormControl("",[Validators.required,Validators.minLength(6), Validators.maxLength(15)]),
    rpwd: new FormControl("")
    
  });

  registerSubmitted(event: any){
    console.log(event);
if(this.Pwd.value == this.Rpwd.value){
  console.log("Submitted");
}
else {
  this.repeatPass = 'inline'
}
    
  }

  get firstName() : FormControl{
    return this.registerForm.get("FirstName") as FormControl;
  }
  get lastName() : FormControl{
    return this.registerForm.get("LastName") as FormControl;
  }
  get email() : FormControl{
    return this.registerForm.get("Email") as FormControl;
  }
  get mobile() : FormControl{
    return this.registerForm.get("Mobile") as FormControl;
  }
  get gender() : FormControl{
    return this.registerForm.get("Gender") as FormControl;
  }
  get address() : FormControl{
    return this.registerForm.get("Address") as FormControl;
  }
  get age() : FormControl{
    return this.registerForm.get("Age") as FormControl;
  }
  get zip() : FormControl{
    return this.registerForm.get("Zip") as FormControl;
  }
  get Pwd() : FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  get Rpwd() : FormControl{
    return this.registerForm.get("rpwd") as FormControl;
  }
}
