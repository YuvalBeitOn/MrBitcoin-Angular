// import { Injectable } from '@angular/core';

// const user = {
//   name: 'Dany Holwood',
//   coins : 100,
//   moves: [],
//   imgUrl: `https://robohash.org/${Math.floor(Math.random() * 100)}?set=set5`
// }

// @Injectable({
//   providedIn: 'root'
// })

// export class UserService {

//   constructor() { }

//   public getUser() {
//     return JSON.parse(JSON.stringify(user))
//   }
// }


import { Injectable, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { StorageService } from '../storage-service/storage.service';
import { Contact } from '../../models/contact.model';
import { Move } from '../../models/move.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: User[];
  private loggedInUser: User;

  constructor(private storageService: StorageService) {

    var users = this.storageService.getFromStore('users');
    if (!users || !users.length) {
      users = [];
      this.storageService.setToStore('users', users);
    }
    this._users = users;
  }


  getUser(): User {
    if (!this._users || !this._users.length) return
    const user = this._users[0];
    this.loggedInUser = user;
    console.log('user in getUser in service:', user);
    
    return user;
  }

  signup( name: string ): void {
    const newUser = new User();
    newUser.name = name;
    newUser.setId();
    newUser.setUserImg();
    this._users.unshift(newUser);
    this.storageService.setToStore('users', this._users);
  }

  addMove(contact: Contact, amount: number) {
    const newMove = new Move(
      contact._id,
      contact.name,
      Date.now(),
      amount
    );
    const user = this.loggedInUser
    user.moves.unshift(newMove);
    user.coins = user.coins - amount
    this._updateUser(user)
  }

  _updateUser(user) {
    const idx = this._users.findIndex(user => user._id === this.loggedInUser._id)
    this._users.splice(idx, 1, user)
    this.storageService.setToStore('users', this._users)
    return user
  }

}
