import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  genders: String[] = ['Male', 'Female', 'Other']
  skillLevels: String[] = ['Beginner', 'Intermediate', 'Professional']

  @ViewChild('f') signupForm!: NgForm;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onCancel()
  {
    let cancel = confirm("Do you want to cancel the current registration ?");
    if(cancel)
    {
      this.router.navigate(['/login']);
    }
  }

  onClear()
  {
    this.signupForm.reset();
  }

  onSubmit()
  {
    // console.log(this.signupForm.value);
    const {password:_, ...user} = this.signupForm.value;
    // console.log("Modified user object: " + JSON.stringify(user));
    this.userService.addUser(user);
    alert("You have been registered successfully!");
    this.router.navigate(['/user',this.signupForm.value.username]);
  }
}
