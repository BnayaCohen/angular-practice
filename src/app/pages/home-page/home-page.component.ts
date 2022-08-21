import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private UserService: UserService) { }

  user!:User

  ngOnInit(): void {
    this.user = this.UserService.getUser()
    console.log(this.user);
    
  }

}
