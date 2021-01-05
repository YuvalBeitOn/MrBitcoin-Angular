import { Component } from '@angular/core';
import { UserService } from './services/user-service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MisterBitcoin';


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    const user = this.userService.getUser()
    if (!user) this.router.navigateByUrl('signup');
  }

}
