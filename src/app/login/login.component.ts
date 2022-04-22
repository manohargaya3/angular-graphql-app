import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  genders: String[] = ['Male', 'Female', 'Other']
  skillLevels: String[] = ['Beginner', 'Intermediate', 'Professional']

  @ViewChild('f') userForm!: NgForm;

  loginForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required)
    });

  }

  onSubmit()
  {
    // console.log(this.loginForm);
    // this.router.navigate(['/user',this.loginForm.get('username')?.value]);
  }
}
