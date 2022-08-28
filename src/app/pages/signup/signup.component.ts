import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router) { }

  user!: User;

  ngOnInit(): void {
    this.user = new User();
  }

  onSignUp(): void {
    console.log(this.user.name);
    
    this.userService.signup(this.user.name);
    this.router.navigate(['/home']);
  }
}
