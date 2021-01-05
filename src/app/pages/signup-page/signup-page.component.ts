import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  name: string = ''
  constructor(private userService: UserService, private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onSignUp() {
    this.userService.signup(this.name)
    this.router.navigateByUrl('/home');
  }

}
