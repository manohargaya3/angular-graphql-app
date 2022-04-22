import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  username!: String;
  user!: User;
  isUserPresent: Boolean = true;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.username = params['username'];
        this.user = this.userService.getUserById(this.username);
        // console.log("User details : " + JSON.stringify(this.user));
      });
      if(Object.keys(this.user).length == 0)
        {
          this.isUserPresent = false;
        }
  }

}
