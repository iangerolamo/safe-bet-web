import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../core/user/user";
import {Observable} from "rxjs";
import {UserService} from "../../../core/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>
  user: User | undefined;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    // @ts-ignore
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate([''])
  }

}
