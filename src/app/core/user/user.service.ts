import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenService} from "../token/token.service";

const USER = 'userName';


@Injectable({ providedIn: 'root' })
export class UserService {


  private userSubject = new BehaviorSubject(null);

  constructor(private tokenService: TokenService) {
    this.handleNotifyUser();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.handleNotifyUser();
  }

  handleNotifyUser() {
    const currentUser = this.getUserName();
    // @ts-ignore
    this.userSubject.next(currentUser);
  }

  setUserName(userName: string) {
    window.localStorage.setItem(USER, userName);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return window.localStorage.getItem(USER);
  }

  removeUserName() {
    window.localStorage.removeItem(USER);
  }

  logout() {
    this.removeUserName();
    this.userSubject.next(null);
  }


}
