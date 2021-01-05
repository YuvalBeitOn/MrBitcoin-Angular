import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  
  user = this.userService.getUser();
  isMenuOpen: boolean = false
  constructor(private userService: UserService) { }


  toggleNav() {
    this.isMenuOpen = !this.isMenuOpen
  }
  ngOnInit(): void {
  }

}
