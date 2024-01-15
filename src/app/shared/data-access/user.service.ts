import { Injectable, OnInit } from '@angular/core';
import { User } from '../intefaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor() {
    const persistedUsers = localStorage.getItem('@leanwork:users');
    if (persistedUsers) {
      this.users = JSON.parse(persistedUsers);
    }
  }

  getUsers() {
    return this.users;
  }

  registerUser(newUser: User) {
    this.users.push(newUser);
    localStorage.setItem('@leanwork:users', JSON.stringify(this.users));
  }
}
