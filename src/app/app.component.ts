import { Component, OnInit } from '@angular/core';

const loggedKey = "=log_in+key!"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'PiS';
  is_logged!: boolean;
  private adminUser = {
    'gmail': 'pis@gmail.com',
    'password': '123456' 
  }

  ngOnInit(): void {
    if (sessionStorage.getItem(loggedKey)) {
      this.is_logged = sessionStorage.getItem(loggedKey) ? 
        (sessionStorage.getItem(loggedKey) === 'true' ? true : false) : 
        false;
    }
    else {
      this.is_logged = false;
      sessionStorage.setItem(loggedKey, String(this.is_logged));
    }
  }

  logIn(gmail:string, pass:string) {
    this.is_logged = gmail === this.adminUser.gmail && pass === this.adminUser.password
    sessionStorage.setItem(loggedKey, String(this.is_logged));
    return this.is_logged;
  }
}