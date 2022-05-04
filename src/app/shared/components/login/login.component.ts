import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {UserService} from "../../../core/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.authService.getInfoUserMock().subscribe(res => {
      this.userService.setUserName(res.nome);
      this.userService.handleNotifyUser();
      this.router.navigate(['home'])
    })
  }
}
